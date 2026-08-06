import { BoxGeometry, Group, Mesh, MeshBasicMaterial } from "three";
import { describe, expect, it } from "vitest";

import type { World } from "../../core";

import { LightShined } from "./light-shined";

// LightShined only touches the world in update() — add/remove never do — so
// a bare stub is enough for these lifecycle tests.
const makeLightShined = () => new LightShined({} as World);

const makeRig = () => {
  const root = new Group();
  const torso = new Group();
  const head = new Mesh(new BoxGeometry(), new MeshBasicMaterial());
  const armL = new Mesh(new BoxGeometry(), new MeshBasicMaterial());
  const armR = new Mesh(new BoxGeometry(), new MeshBasicMaterial());
  torso.add(head, armL, armR);
  root.add(torso);
  return { root, torso, head, armL, armR };
};

describe("LightShined proxy idempotency", () => {
  it("keeps one proxy layer across repeated add/remove cycles", () => {
    const ls = makeLightShined();
    const { root, torso, head } = makeRig();

    ls.add(root);
    // The installed proxies ARE the material/children references; if a later
    // add stacked another layer, these identities would change.
    const headMaterial = head.material;
    const rootChildren = root.children;
    const torsoChildren = torso.children;

    for (let i = 0; i < 20; i++) {
      ls.remove(root);
      ls.add(root);
    }

    expect(head.material).toBe(headMaterial);
    expect(root.children).toBe(rootChildren);
    expect(torso.children).toBe(torsoChildren);
    root.traverse((node) => {
      expect(node.userData.lightShinedProxyLayers ?? 0).toBe(1);
    });
  });

  it("does not re-wrap siblings shifted by a child removal", () => {
    const ls = makeLightShined();
    const { root, torso, head, armR } = makeRig();

    ls.add(root);
    const armRMaterial = armR.material;
    const armRChildren = armR.children;

    // Object3D.remove splices the children array, which reassigns the
    // shifted siblings through the proxy's set trap.
    torso.remove(head);

    expect(armR.material).toBe(armRMaterial);
    expect(armR.children).toBe(armRChildren);
    expect(armR.userData.lightShinedProxyLayers).toBe(1);
    expect(root.children).toBeDefined();
  });

  it("does not re-wrap a cached object re-added to a lit parent", () => {
    const ls = makeLightShined();
    const { root, torso } = makeRig();

    ls.add(root);

    // Weapon-switch pattern: the same model object cycles in and out of a
    // hand group.
    const weapon = new Mesh(new BoxGeometry(), new MeshBasicMaterial());
    torso.add(weapon);
    const weaponMaterial = weapon.material;

    for (let i = 0; i < 5; i++) {
      torso.remove(weapon);
      torso.add(weapon);
    }

    expect(weapon.material).toBe(weaponMaterial);
    expect(weapon.userData.lightShinedProxyLayers).toBe(1);
  });

  it("still hooks materials of children added after setup", () => {
    const ls = makeLightShined();
    const { root, torso } = makeRig();

    ls.add(root);

    const late = new Mesh(new BoxGeometry(), new MeshBasicMaterial());
    torso.add(late);

    expect((late.material as MeshBasicMaterial).userData.lightEffectSetup).toBe(
      true,
    );
    expect(late.userData.lightShinedProxyLayers).toBe(1);
    expect(root.userData.lightUniforms.length).toBeGreaterThan(0);
  });

  it("purges uniforms of materials that left the subtree", () => {
    const ls = makeLightShined();
    const { root, torso } = makeRig();

    ls.add(root);
    const bodyCount = root.userData.lightUniforms.length;
    expect(bodyCount).toBe(3); // head + armL + armR

    // Dispose-and-recreate equip pattern: every swap attaches a FRESH mesh
    // with a FRESH material (weapon models are rebuilt per equip). Before
    // the derived-list fix, each iteration leaked one uniform into the
    // root's list, which update() then lerped forever.
    let current: Mesh | null = null;
    for (let i = 0; i < 20; i++) {
      if (current) torso.remove(current);
      current = new Mesh(new BoxGeometry(), new MeshBasicMaterial());
      torso.add(current);
    }

    // Bounded: the 3 body materials plus the one currently-held item.
    expect(root.userData.lightUniforms.length).toBe(bodyCount + 1);
    // The live item's uniform is driven; the removed ones are gone.
    const currentUniform = (current!.material as MeshBasicMaterial).userData
      .lightUniform;
    expect(root.userData.lightUniforms).toContain(currentUniform);
  });

  it("marks justChanged only when an object rejoins the update list", () => {
    const ls = makeLightShined();
    const { root } = makeRig();

    ls.add(root);
    root.userData.justChanged = false;

    ls.add(root); // already a member: no snap
    expect(root.userData.justChanged).toBe(false);

    ls.remove(root);
    ls.add(root); // rejoining: snap to current light
    expect(root.userData.justChanged).toBe(true);
  });
});
