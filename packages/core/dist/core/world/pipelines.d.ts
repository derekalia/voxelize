import { ChunkProtocol } from "@voxelize/protocol";
import { Coords2 } from "../../types";
import { Chunk } from "./chunk";
export type ChunkStage = {
    stage: "requested";
    retryCount: number;
    requestedAt: number;
} | {
    stage: "processing";
    source: "update" | "load";
    data: ChunkProtocol;
} | {
    stage: "loaded";
    chunk: Chunk;
};
type StageType = ChunkStage["stage"];
export declare class ChunkPipeline {
    private states;
    private indices;
    private setStage;
    private removeStage;
    getStage(name: string): StageType | null;
    isInStage(name: string, stage: StageType): boolean;
    getInStage(stage: StageType): Set<string>;
    markRequested(coords: Coords2): void;
    incrementRetry(name: string): number;
    resetRetry(name: string): void;
    getRetryCount(name: string): number;
    markProcessing(coords: Coords2, source: "update" | "load", data: ChunkProtocol): void;
    markLoaded(coords: Coords2, chunk: Chunk): void;
    getLoadedChunk(name: string): Chunk | undefined;
    getProcessingData(name: string): {
        source: "update" | "load";
        data: ChunkProtocol;
    } | undefined;
    remove(name: string): Chunk | undefined;
    forEach(stage: StageType, callback: (name: string) => void): void;
    forEachLoaded(callback: (chunk: Chunk, name: string) => void): void;
    get loadedCount(): number;
    get requestedCount(): number;
    get processingCount(): number;
    get totalCount(): number;
}
export declare class MeshPipeline {
    private states;
    private dirty;
    private getOrCreate;
    static makeKey(cx: number, cz: number, level: number): string;
    static parseKey(key: string): {
        cx: number;
        cz: number;
        level: number;
    };
    onVoxelChange(cx: number, cz: number, level: number): void;
    shouldStartJob(key: string): boolean;
    startJob(key: string): number;
    onJobComplete(key: string, jobGeneration: number): boolean;
    needsRemesh(key: string): boolean;
    markFreshFromServer(cx: number, cz: number, level: number): void;
    getDirtyKeys(): string[];
    hasDirtyChunks(): boolean;
    remove(cx: number, cz: number): void;
    hasInFlightJob(key: string): boolean;
    hasAnyInFlightJobs(): boolean;
}
export {};
//# sourceMappingURL=pipelines.d.ts.map