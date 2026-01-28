import { Camera, Mesh, Object3D, Vector3 } from "three";
export interface TransparentMeshData {
    centroids: Float32Array;
    faceCount: number;
    originalIndices: Uint32Array;
    sortedIndices: Uint32Array;
    distances: Float32Array;
    faceOrder: Uint32Array;
    lastCameraPos: Vector3;
    sortKeys: Uint32Array;
    sortTemp: Uint32Array;
}
export declare function prepareTransparentMesh(mesh: Mesh): TransparentMeshData | null;
export declare function setupTransparentSorting(object: Object3D): void;
export declare function sortTransparentMesh(mesh: Mesh, data: TransparentMeshData, camera: Camera): void;
//# sourceMappingURL=transparent-sorter.d.ts.map