import { BufferGeometry, Camera, CanvasTexture, Color, Euler, Group, Matrix4, Mesh, Object3D, Quaternion, Scene, ShaderMaterial, Texture, Vector3 } from "three";
export declare class ThreeUtils {
    static isTexture(object: any): object is Texture;
    static isVector3(object: any): object is Vector3;
    static isColor(object: any): object is Color;
    static isMatrix4(object: any): object is Matrix4;
    static isQuaternion(object: any): object is Quaternion;
    static isEuler(object: any): object is Euler;
    static isBufferGeometry(object: any): object is BufferGeometry;
    static isMesh(object: any): object is Mesh;
    static isGroup(object: any): object is Group;
    static isScene(object: any): object is Scene;
    static isCamera(object: any): object is Camera;
    static isObject3D(object: any): object is Object3D;
    static isCanvasTexture(object: any): object is CanvasTexture;
    static isShaderMaterial(object: any): object is ShaderMaterial;
}
//# sourceMappingURL=three-utils.d.ts.map