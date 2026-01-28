/**
 * This is the default shaders used for the chunks.
 */
export declare const DEFAULT_CHUNK_SHADERS: {
    vertex: string;
    fragment: string;
};
export declare const customShaders: {
    sway(options?: Partial<{
        speed: number;
        amplitude: number;
        scale: number;
        rooted: boolean;
        yScale: number;
    }>): {
        vertexShader: string;
        fragmentShader: string;
    };
    swayShaderBased(options?: Partial<{
        speed: number;
        amplitude: number;
        scale: number;
        rooted: boolean;
        yScale: number;
    }>): {
        vertexShader: string;
        fragmentShader: string;
    };
    swayCrossShaderBased(options?: Partial<{
        speed: number;
        amplitude: number;
        scale: number;
        rooted: boolean;
        yScale: number;
    }>): {
        vertexShader: string;
        fragmentShader: string;
    };
};
export declare const SHADER_LIGHTING_CHUNK_SHADERS: {
    vertex: string;
    fragment: string;
};
export declare const SHADER_LIGHTING_CROSS_CHUNK_SHADERS: {
    vertex: string;
    fragment: string;
};
export declare function createSwayShader(baseShaders: {
    vertex: string;
    fragment: string;
}, options?: Partial<{
    speed: number;
    amplitude: number;
    scale: number;
    rooted: boolean;
    yScale: number;
}>): {
    vertexShader: string;
    fragmentShader: string;
};
//# sourceMappingURL=shaders.d.ts.map