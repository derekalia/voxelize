import { Data3DTexture, Vector3 } from "three";
import type { LightSourceRegistry } from "./light-registry";
export interface LightVolumeConfig {
    size: [number, number, number];
    resolution: number;
}
export declare class LightVolume {
    private config;
    private texture;
    private data;
    private volumeMin;
    private volumeSize;
    private lastCenterX;
    private lastCenterY;
    private lastCenterZ;
    private lastRegistryVersion;
    private registryVersion;
    private tempHalfSize;
    private tempVolumeMax;
    private tempLocalPos;
    constructor(config?: Partial<LightVolumeConfig>);
    markDirty(): void;
    updateCenter(center: Vector3): boolean;
    updateFromRegistry(registry: LightSourceRegistry): boolean;
    private accumulateLight;
    getTexture(): Data3DTexture;
    getVolumeMin(): Vector3;
    getVolumeSize(): Vector3;
    getResolution(): Vector3;
    dispose(): void;
}
//# sourceMappingURL=light-volume.d.ts.map