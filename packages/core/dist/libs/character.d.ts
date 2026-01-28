import { Color, Group, Object3D, Quaternion, Vector3 } from "three";
import { ShaderLightingUniforms } from "../core/world/entity-shadow-uniforms";
import { CanvasBox, CanvasBoxOptions } from "./canvas-box";
import { NameTag, NameTagOptions } from "./nametag";
/**
 * Parameters to create a character's head.
 * Defaults to:
 * ```ts
 * {
 *   gap: 0.1 * CHARACTER_SCALE,
 *   layers: 1,
 *   side: THREE.DoubleSide,
 *   width: 0.5 * CHARACTER_SCALE,
 *   widthSegments: 16,
 *   height: 0.25 * CHARACTER_SCALE,
 *   heightSegments: 8,
 *   depth: 0.5 * CHARACTER_SCALE,
 *   depthSegments: 16,
 *   neckGap: 0.05 * CHARACTER_SCALE,
 * }
 * ```
 * where `CHARACTER_SCALE` is 0.9.
 */
type ColorCanvasBoxOptions = CanvasBoxOptions & {
    color: Color | string;
};
export type HeadOptions = ColorCanvasBoxOptions & {
    /**
     * The distance between the head and the body.
     */
    neckGap?: number;
    faceColor: Color | string;
};
/**
 * Parameters to create a character's body.
 * Defaults to:
 * ```ts
 * {
 *   gap: 0.1 * CHARACTER_SCALE,
 *   layers: 1,
 *   side: THREE.DoubleSide,
 *   width: 1 * CHARACTER_SCALE,
 *   widthSegments: 16,
 * }
 * ```
 * where `CHARACTER_SCALE` is 0.9.
 */
export type BodyOptions = ColorCanvasBoxOptions;
/**
 * Parameters to create the legs of a character.
 * Defaults to:
 * ```ts
 * {
 *   gap: 0.1 * CHARACTER_SCALE,
 *   layers: 1,
 *   side: THREE.DoubleSide,
 *   width: 0.25 * CHARACTER_SCALE,
 *   widthSegments: 3,
 *   height: 0.25 * CHARACTER_SCALE,
 *   heightSegments: 3,
 *   depth: 0.25 * CHARACTER_SCALE,
 *   depthSegments: 3,
 *   betweenLegsGap: 0.2 * CHARACTER_SCALE,
 * }
 * ```
 * where `CHARACTER_SCALE` is 0.9.
 */
export type LegOptions = ColorCanvasBoxOptions & {
    /**
     * The gap between the legs.
     */
    betweenLegsGap?: number;
};
/**
 * Parameters to create a character's arms.
 * Defaults to:
 * ```ts
 * {
 *   gap: 0.1 * CHARACTER_SCALE,
 *   layers: 1,
 *   side: THREE.DoubleSide,
 *   width: 0.25 * CHARACTER_SCALE,
 *   widthSegments: 8,
 *   height: 0.5 * CHARACTER_SCALE,
 *   heightSegments: 16,
 *   depth: 0.25 * CHARACTER_SCALE,
 *   depthSegments: 8,
 *   shoulderGap: 0.05 * CHARACTER_SCALE,
 *   shoulderDrop: 0.25 * CHARACTER_SCALE,
 * }
 * ```
 */
export type ArmsOptions = ColorCanvasBoxOptions & {
    /**
     * The distance from the top of the body to the top of the arms.
     */
    shoulderDrop?: number;
    /**
     * The distance between the body and each arm.
     */
    shoulderGap?: number;
};
/**
 * Parameters to create a character.
 */
export type CharacterOptions = {
    /**
     * The lerp factor of the swinging motion of the arms and legs. Defaults to `0.8`.
     */
    swingLerp?: number;
    /**
     * The speed at which the arms swing when the character is moving. Defaults to `1.4`.
     */
    walkingSpeed?: number;
    /**
     * The speed at which the arms swing when the character is idle. Defaults to `0.06`.
     */
    idleArmSwing?: number;
    /**
     * The lerp factor of the character's position change. Defaults to `0.7`.
     */
    positionLerp?: number;
    /**
     * The lerp factor of the character's rotation change. Defaults to `0.2`.
     */
    rotationLerp?: number;
    nameTagOptions?: Partial<NameTagOptions>;
    /**
     * Parameters to create the character's head.
     */
    head?: Partial<HeadOptions>;
    /**
     * Parameters to create the character's body.
     */
    body?: Partial<BodyOptions>;
    /**
     * Parameters to create the character's legs.
     */
    legs?: Partial<LegOptions>;
    /**
     * Parameters to create the character's arms.
     */
    arms?: Partial<ArmsOptions>;
    /**
     * Whether this character should receive shadows. Defaults to `false`.
     */
    receiveShadows?: boolean;
};
export declare const defaultCharacterOptions: CharacterOptions;
export declare const defaultHeadOptions: HeadOptions;
export declare const defaultBodyOptions: BodyOptions;
export declare const defaultArmsOptions: ArmsOptions;
export declare const defaultLegsOptions: LegOptions;
/**
 * The default Voxelize character. This can be used in `Peers.createPeer` to apply characters onto
 * multiplayer peers. This can also be **attached** to a `RigidControls` instance to have a character
 * follow the controls.
 *
 * When `character.set` is called, the character's head will be lerp to the new rotation first, then the
 * body will be lerp to the new rotation. This is to create a more natural looking of character rotation.
 *
 * # Example
 * ```ts
 * const character = new VOXELIZE.Character();
 *
 * // Set the nametag content.
 * character.username = "<placeholder>";
 *
 * // Load a texture to paint on the face.
 * world.loader.addTexture(FunnyImageSrc, (texture) => {
 *   character.head.paint("front", texture);
 * })
 *
 * // Attach the character to a rigid controls.
 * controls.attachCharacter(character);
 * ```
 *
 * ![Character](/img/docs/character.png)
 *
 * @noInheritDoc
 */
export declare class Character extends Group {
    /**
     * Parameters to create a Voxelize character.
     */
    options: CharacterOptions;
    /**
     * The sub-mesh holding the character's head.
     */
    headGroup: Group;
    /**
     * The sub-mesh holding the character's body.
     */
    bodyGroup: Group;
    /**
     * The sub-mesh holding the character's left arm.
     */
    leftArmGroup: Group;
    /**
     * The sub-mesh holding the character's right arm.
     */
    rightArmGroup: Group;
    /**
     * The sub-mesh holding the character's left leg.
     */
    leftLegGroup: Group;
    /**
     * The sub-mesh holding the character's right leg.
     */
    rightLegGroup: Group;
    /**
     * The actual head mesh as a paint-able `CanvasBox`.
     */
    head: CanvasBox;
    /**
     * The actual body mesh as a paint-able `CanvasBox`.
     */
    body: CanvasBox;
    /**
     * The actual left arm mesh as a paint-able `CanvasBox`.
     */
    leftArm: CanvasBox;
    /**
     * The actual right arm mesh as a paint-able `CanvasBox`.
     */
    rightArm: CanvasBox;
    /**
     * The actual left leg mesh as a paint-able `CanvasBox`.
     */
    leftLeg: CanvasBox;
    /**
     * The actual right leg mesh as a paint-able `CanvasBox`.
     */
    rightLeg: CanvasBox;
    /**
     * The nametag of the character that floats right above the head.
     */
    nametag: NameTag;
    /**
     * The speed where the character has detected movements at. When speed is 0, the
     * arms swing slowly in idle mode, and when speed is greater than 0, the arms swing
     * faster depending on the passed-in options.
     */
    speed: number;
    /**
     * The new position of the character. This is used to lerp the character's position
     */
    newPosition: Vector3;
    /**
     * The new body direction of the character. This is used to lerp the character's body rotation.
     */
    newBodyDirection: Quaternion;
    /**
     * The new head direction of the character. This is used to lerp the character's head rotation.
     */
    newDirection: Quaternion;
    /**
     * Somewhere to store whatever you want.
     */
    extraData: any;
    /**
     * Whether the character is in a sitting pose.
     */
    private _isSitting;
    /**
     * A listener called when a character starts moving.
     */
    onMove: () => void;
    /**
     * A listener called when a character stops moving.
     */
    onIdle: () => void;
    private mixer;
    private armSwingClip;
    private armSwingAnimation;
    /**
     * An internal clock instance for calculating delta time.
     */
    private clock;
    /**
     * Create a new Voxelize character.
     *
     * @param options Parameters to create a Voxelize character.
     */
    constructor(options?: Partial<CharacterOptions>);
    /**
     * Update the character's animation and rotation. After `set` is called, `update` must be called to
     * actually lerp to the new position and rotation. Note that when a character is attached to a control,
     * `update` is called automatically within the control's update loop.
     */
    update(): void;
    snapToTarget(): void;
    /**
     * Set the character's position and direction that its body is situated at and the head is looking
     * at. This uses `MathUtils.directionToQuaternion` to slerp the head's rotation to the new direction.
     *
     * The `update` needs to be called to actually lerp to the new position and rotation.
     *
     * @param position The new position of the character.
     * @param direction The new direction of the character.
     */
    set(position: number[], direction: number[]): void;
    /**
     * Change the content of the user's nametag. If the nametag is empty, nothing will be rendered.
     */
    set username(username: string);
    /**
     * Get the content of the nametag of the character.
     */
    get username(): string;
    /**
     * Get the height at which the eye of the character is situated at.
     */
    get eyeHeight(): number;
    /**
     * Get the total height of the character, in other words, the sum of the heights of
     * the head, body, and legs.
     */
    get totalHeight(): number;
    set bodyColor(color: string | Color);
    get bodyColor(): string | Color;
    set armColor(color: string | Color);
    get armColor(): string | Color;
    updateShadowUniforms(lightingUniforms: ShaderLightingUniforms): void;
    set legColor(color: string | Color);
    get legColor(): string | Color;
    set headColor(color: string | Color);
    get headColor(): string | Color;
    set faceColor(color: string | Color);
    get faceColor(): string | Color;
    get isSitting(): boolean;
    setSitting(sitting: boolean): void;
    /**
     * Create the character's model programmatically.
     */
    private createModel;
    /**
     * Calculate the delta between the current position and the new position to determine if the character
     * is moving or not.
     */
    private calculateDelta;
    /**
     * Lerp all character's body parts to the new position and new rotation.
     */
    private lerpAll;
    /**
     * Play the walking animation for the character, in other words the arm movements.
     */
    private playArmsWalkingAnimation;
    /**
     * Play the walking animation for the character, in other words the leg movements.
     */
    private playLegsWalkingAnimation;
    /**
     * Play the "swing" animation.
     */
    playArmSwingAnimation: () => void;
    /**
     * Set the character's arm holding object.
     *
     * @param object The object to set as the arm holding object.
     */
    setArmHoldingObject: (object: Object3D | undefined, side?: "left" | "right") => void;
}
export {};
//# sourceMappingURL=character.d.ts.map