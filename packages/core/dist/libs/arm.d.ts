import * as THREE from "three";
import { Inputs } from "../core/inputs";
import { ShaderLightingUniforms } from "../core/world/entity-shadow-uniforms";
export type ArmOptions = {
    armObject?: THREE.Object3D;
    armObjectOptions: ArmObjectOptions;
    blockObjectOptions?: ArmObjectOptions;
    armColor?: string | THREE.Color;
    armTexture?: THREE.Texture;
    customObjectOptions?: Record<string, ArmObjectOptions>;
    receiveShadows?: boolean;
};
type ArmObjectOptions = {
    position: THREE.Vector3;
    quaternion: THREE.Quaternion;
    swingPositions?: THREE.Vector3[];
    swingQuaternions?: THREE.Quaternion[];
    swingTimes?: number[];
};
export declare class Arm extends THREE.Group {
    options: ArmOptions;
    private mixer;
    private armSwingClip;
    private blockSwingClip;
    private swingAnimation;
    private customSwingClips;
    /**
     * An internal clock instance for calculating delta time.
     */
    private clock;
    private isTransitioning;
    private transitionStartTime;
    private transitionDuration;
    private transitionDirection;
    private pendingArmObject;
    private pendingCustomType;
    private initialArmY;
    private targetArmY;
    private currentArmObject;
    emitSwingEvent: () => void;
    constructor(options?: Partial<ArmOptions>);
    updateShadowUniforms(lightingUniforms: ShaderLightingUniforms): void;
    /**
     * Connect the arm to the given input manager. This will allow the arm to listen to left
     * and right clicks to play arm animations. This function returns a function that when called
     * unbinds the arm's keyboard inputs.
     *
     * @param inputs The {@link Inputs} instance to bind the arm's keyboard inputs to.
     * @param namespace The namespace to bind the arm's keyboard inputs to.
     */
    connect: (inputs: Inputs, namespace?: string) => () => void;
    /**
     * Set a new object for the arm. If `animate` is true, the transition will be animated.
     *
     * @param object New object for the arm
     * @param animate Whether to animate the transition
     */
    setArmObject: (object: THREE.Object3D | undefined, animate: boolean, customType?: string) => void;
    private setArm;
    private setBlock;
    private setCustomObject;
    /**
     *
     * Update the arm's animation. Note that when a arm is attached to a control,
     * `update` is called automatically within the control's update loop.
     */
    update(): void;
    /**
     * Perform an arm swing by playing the swing animation and sending an event to the network.
     */
    doSwing: () => void;
    /**
     * Paint the arm with a texture or color. Only works when showing the empty arm (no held object).
     */
    paintArm: (texture: THREE.Texture | THREE.Color) => void;
    /**
     * Play the "swing" animation.
     */
    private playSwingAnimation;
}
export {};
//# sourceMappingURL=arm.d.ts.map