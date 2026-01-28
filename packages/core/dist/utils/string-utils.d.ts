export type FindSimilarOptions = {
    maxSuggestions?: number;
};
export declare function findSimilar(target: string, available: string[], options?: FindSimilarOptions): string[];
export type FormatSuggestionOptions = {
    maxFallbackItems?: number;
};
export declare function formatSuggestion(suggestions: string[], allAvailable: string[], options?: FormatSuggestionOptions): string;
//# sourceMappingURL=string-utils.d.ts.map