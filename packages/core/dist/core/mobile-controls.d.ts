import { PerspectiveCamera } from "three";
import { RigidControls, RigidControlsOptions } from "./controls";
import { World } from "./world";
/**
 * Mobile-specific rigid body controls for touch-based input.
 * Extends RigidControls but removes pointer lock and keyboard bindings,
 * instead exposing methods for joystick, jump button, and touch-look input.
 *
 * @category Core
 */
export declare class MobileRigidControls extends RigidControls {
    private mobileEuler;
    private mobileQuaternion;
    /**
     * Construct mobile rigid body controls with touch-based input.
     *
     * @param camera The camera to apply the controls to.
     * @param domElement The DOM element (not used for pointer lock on mobile).
     * @param world The world to apply the controls to.
     * @param options The options to initialize the controls with.
     */
    constructor(camera: PerspectiveCamera, domElement: HTMLElement, world: World, options?: Partial<RigidControlsOptions>);
    /**
     * Set movement direction from joystick input.
     * Converts normalized joystick coordinates to movement flags.
     *
     * @param x Horizontal input [-1, 1], where -1 is left, 1 is right
     * @param y Vertical input [-1, 1], where -1 is down/back, 1 is up/front
     */
    setMovementVector: (x: number, y: number) => void;
    /**
     * Set jump state from button input.
     *
     * @param pressed Whether the jump button is currently pressed
     */
    setJumping: (pressed: boolean) => void;
    /**
     * Update camera rotation from touch drag input.
     * Mimics mouse movement for looking around.
     *
     * @param deltaX Horizontal touch movement in pixels
     * @param deltaY Vertical touch movement in pixels
     */
    setLookDirection: (deltaX: number, deltaY: number) => void;
    /**
     * Reset all movement flags to false.
     * Useful when exiting play mode or pausing.
     */
    resetMovements: () => void;
    lock: () => void;
    unlock: () => void;
    connect: () => () => void;
}
//# sourceMappingURL=mobile-controls.d.ts.map