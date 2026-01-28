import { AnimationClip, Quaternion, Vector3 } from "three";
export declare class AnimationUtils {
    /**
     * Generates an animation clip.
     *
     * @param name Name of the clip
     * @param times Times of the clip
     * @param initialPosition Initial position
     * @param initialQuaternion Initial quaternion
     * @param midPositions Middle positions
     * @param midQuaternions Middle quaternions
     * @returns Animation clip
     */
    static generateClip(name: string, times: number[], initialPosition: Vector3, initialQuaternion: Quaternion, midPositions: Vector3[], midQuaternions: Quaternion[]): AnimationClip;
}
//# sourceMappingURL=animation-utils.d.ts.map