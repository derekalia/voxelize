import { Camera, Group, Matrix4, Object3D, Scene, Texture, Vector3, WebGLRenderer } from "three";
export interface CSMConfig {
    cascades: number;
    shadowMapSize: number;
    maxShadowDistance: number;
    shadowBias: number;
    shadowNormalBias: number;
    lightMargin: number;
}
export declare class CSMRenderer {
    private config;
    private cascades;
    private lightDirection;
    private lastLightDirection;
    private frustum;
    private depthMaterial;
    private frameCount;
    private lastCameraPosition;
    private cascadeDirty;
    private cascadeNeedsRender;
    private tempMatrix;
    private tempVec3;
    private skipShadowObjectsCache;
    private cascadeFrustum;
    private cascadeMatrix;
    private entityBatchGroup;
    private frustumCenter;
    private frustumCameraDir;
    private frustumUp;
    private lightViewMatrix;
    private lightViewMatrixInverse;
    private lightSpaceCenter;
    private tempLookAtTarget;
    private cornerPool;
    constructor(config?: Partial<CSMConfig>);
    private initCascades;
    setLightDirection(direction: Vector3): void;
    private markAllCascadesDirty;
    markAllCascadesForRender(): void;
    private shouldUpdateCascade;
    rebuildSkipShadowCache(scene: Scene): void;
    update(mainCamera: Camera, sunDirection: Vector3, playerPosition?: Vector3): void;
    private updateCascadeFrustum;
    addSkipShadowObject(object: Object3D): void;
    removeSkipShadowObject(object: Object3D): void;
    render(renderer: WebGLRenderer, scene: Scene, entities?: Object3D[], maxEntityShadowDistance?: number, instancePools?: Group[]): void;
    private entityShadowFrameCounter;
    private shouldRenderEntityShadows;
    markCascadesForEntityRender(): void;
    getUniforms(): {
        uShadowMaps: Texture[];
        uShadowMatrices: Matrix4[];
        uCascadeSplits: number[];
        uShadowBias: number;
        uNumCascades: number;
    };
    getShadowMap(index: number): Texture | null;
    getCascadeMatrix(index: number): Matrix4 | null;
    getCascadeSplit(index: number): number;
    get numCascades(): number;
    get shadowBias(): number;
    dispose(): void;
}
//# sourceMappingURL=csm-renderer.d.ts.map