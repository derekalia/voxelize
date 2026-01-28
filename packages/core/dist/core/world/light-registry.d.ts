import { Color, Vector3 } from "three";
export interface DynamicLight {
    id: string;
    position: Vector3;
    color: Color;
    intensity: number;
    radius: number;
    falloffExponent: number;
}
export interface LightRegion {
    min: Vector3;
    max: Vector3;
}
export declare class LightSourceRegistry {
    private lights;
    private dirtyRegions;
    private onLightChangedCallbacks;
    addLight(id: string, light: Omit<DynamicLight, "id">): DynamicLight;
    removeLight(id: string): boolean;
    updateLight(id: string, updates: Partial<Omit<DynamicLight, "id">>): boolean;
    getLight(id: string): DynamicLight | undefined;
    getAllLights(): DynamicLight[];
    getLightsInRegion(min: Vector3, max: Vector3): DynamicLight[];
    getLightsNearPoint(point: Vector3, maxDistance: number): DynamicLight[];
    private markRegionDirty;
    getDirtyRegions(): string[];
    clearDirtyRegions(): void;
    onLightChanged(callback: (light: DynamicLight) => void): void;
    private notifyLightChanged;
    get lightCount(): number;
    clear(): void;
}
//# sourceMappingURL=light-registry.d.ts.map