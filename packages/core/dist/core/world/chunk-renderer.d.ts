import { Color, Data3DTexture, Matrix4, Texture, Vector3, Vector4 } from "three";
import { CustomChunkShaderMaterial } from ".";
export interface ShaderLightingUniforms {
    sunDirection: {
        value: Vector3;
    };
    sunColor: {
        value: Color;
    };
    ambientColor: {
        value: Color;
    };
    shadowMap0: {
        value: Texture | null;
    };
    shadowMap1: {
        value: Texture | null;
    };
    shadowMap2: {
        value: Texture | null;
    };
    shadowMatrix0: {
        value: Matrix4;
    };
    shadowMatrix1: {
        value: Matrix4;
    };
    shadowMatrix2: {
        value: Matrix4;
    };
    cascadeSplit0: {
        value: number;
    };
    cascadeSplit1: {
        value: number;
    };
    cascadeSplit2: {
        value: number;
    };
    shadowBias: {
        value: number;
    };
    shadowStrength: {
        value: number;
    };
    sunlightIntensity: {
        value: number;
    };
    lightVolume: {
        value: Data3DTexture | null;
    };
    lightVolumeMin: {
        value: Vector3;
    };
    lightVolumeSize: {
        value: Vector3;
    };
    waterTint: {
        value: Color;
    };
    waterAbsorption: {
        value: number;
    };
    waterLevel: {
        value: number;
    };
    skyTopColor: {
        value: Color;
    };
    skyMiddleColor: {
        value: Color;
    };
    shadowDebugMode: {
        value: number;
    };
}
export declare class ChunkRenderer {
    materials: Map<string, CustomChunkShaderMaterial>;
    uniforms: {
        fogColor: {
            value: Color;
        };
        fogNear: {
            value: number;
        };
        fogFar: {
            value: number;
        };
        ao: {
            value: Vector4;
        };
        minLightLevel: {
            value: number;
        };
        baseAmbient: {
            value: number;
        };
        sunlightIntensity: {
            value: number;
        };
        time: {
            value: number;
        };
        lightIntensityAdjustment: {
            value: number;
        };
        atlasSize: {
            value: number;
        };
        showGreedyDebug: {
            value: number;
        };
    };
    shaderLightingUniforms: ShaderLightingUniforms;
}
//# sourceMappingURL=chunk-renderer.d.ts.map