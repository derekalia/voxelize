import { Data3DTexture, Vector3 } from "three";
import type { Chunk } from "./chunk";
import type { Registry } from "./registry";
export interface VoxelOpacityVolumeConfig {
    size: [number, number, number];
    resolution: number;
}
export declare class VoxelOpacityVolume {
    private config;
    private texture;
    private data;
    private volumeMin;
    private volumeSize;
    private gridRes;
    private lastCenterX;
    private lastCenterY;
    private lastCenterZ;
    private isDirty;
    private tempHalfSize;
    constructor(config?: Partial<VoxelOpacityVolumeConfig>);
    markDirty(): void;
    updateCenter(center: Vector3): boolean;
    updateFromChunks(chunks: Map<string, Chunk>, registry: Registry): boolean;
    private writeChunkOpacity;
    setVoxelOpacity(wx: number, wy: number, wz: number, opaque: boolean): void;
    getTexture(): Data3DTexture;
    getVolumeMin(): Vector3;
    getVolumeSize(): Vector3;
    getGridResolution(): Vector3;
    dispose(): void;
}
//# sourceMappingURL=voxel-opacity-volume.d.ts.map