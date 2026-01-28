import { CubeTexture, Object3D, Scene, Vector3, WebGLRenderer } from "three";
export interface PointLightShadowConfig {
    shadowMapSize: number;
    near: number;
    far: number;
    bias: number;
}
export declare class PointLightShadowRenderer {
    private config;
    private cubeCamera;
    private cubeRenderTarget;
    private depthMaterial;
    private lightPosition;
    private lastLightPosition;
    private needsUpdate;
    private frameCount;
    private updateInterval;
    constructor(config?: Partial<PointLightShadowConfig>);
    setLightPosition(position: Vector3): void;
    getLightPosition(): Vector3;
    getShadowMap(): CubeTexture;
    getNear(): number;
    getFar(): number;
    getBias(): number;
    update(renderer: WebGLRenderer, scene: Scene, skipObjects?: Object3D[]): boolean;
    dispose(): void;
}
export declare const POINT_LIGHT_SHADOW_PARS = "\nuniform samplerCube uPointShadowMap;\nuniform vec3 uPointShadowLightPos;\nuniform float uPointShadowNear;\nuniform float uPointShadowFar;\nuniform float uPointShadowBias;\nuniform bool uPointShadowEnabled;\n\nfloat unpackRGBAToDepth(vec4 v) {\n  return dot(v, vec4(1.0, 1.0/255.0, 1.0/65025.0, 1.0/16581375.0));\n}\n\nfloat samplePointShadow(vec3 worldPos) {\n  if (!uPointShadowEnabled) return 1.0;\n  \n  vec3 lightToFrag = worldPos - uPointShadowLightPos;\n  float currentDepth = length(lightToFrag);\n  \n  if (currentDepth > uPointShadowFar) return 1.0;\n  \n  vec3 sampleDir = normalize(lightToFrag);\n  \n  vec4 shadowSample = texture(uPointShadowMap, sampleDir);\n  float closestDepth = unpackRGBAToDepth(shadowSample) * uPointShadowFar;\n  \n  float bias = uPointShadowBias * (1.0 + currentDepth * 0.1);\n  \n  return currentDepth - bias > closestDepth ? 0.3 : 1.0;\n}\n\nfloat samplePointShadowSoft(vec3 worldPos, vec3 normal) {\n  if (!uPointShadowEnabled) return 1.0;\n  \n  vec3 lightToFrag = worldPos - uPointShadowLightPos;\n  float currentDepth = length(lightToFrag);\n  \n  if (currentDepth > uPointShadowFar) return 1.0;\n  \n  vec3 sampleDir = normalize(lightToFrag);\n  \n  float shadow = 0.0;\n  float diskRadius = 0.02 * currentDepth / uPointShadowFar;\n  \n  vec3 tangent = normalize(cross(sampleDir, vec3(0.0, 1.0, 0.0)));\n  if (length(tangent) < 0.001) {\n    tangent = normalize(cross(sampleDir, vec3(1.0, 0.0, 0.0)));\n  }\n  vec3 bitangent = cross(sampleDir, tangent);\n  \n  const int samples = 4;\n  float offsets[4] = float[](0.25, 0.5, 0.75, 1.0);\n  float angles[4] = float[](0.0, 1.57, 3.14, 4.71);\n  \n  for (int i = 0; i < samples; i++) {\n    float r = diskRadius * offsets[i];\n    float a = angles[i] + currentDepth;\n    vec3 offset = tangent * cos(a) * r + bitangent * sin(a) * r;\n    vec3 dir = normalize(sampleDir + offset);\n    \n    vec4 shadowSample = texture(uPointShadowMap, dir);\n    float closestDepth = unpackRGBAToDepth(shadowSample) * uPointShadowFar;\n    \n    float bias = uPointShadowBias * (1.0 + currentDepth * 0.1);\n    shadow += currentDepth - bias > closestDepth ? 0.0 : 1.0;\n  }\n  \n  shadow /= float(samples);\n  return mix(0.3, 1.0, shadow);\n}\n";
//# sourceMappingURL=point-light-shadow.d.ts.map