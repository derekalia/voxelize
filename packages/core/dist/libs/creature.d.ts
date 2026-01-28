import { Color, Group, Quaternion, Vector3 } from "three";
import { CanvasBox, CanvasBoxOptions } from "./canvas-box";
import { NameTag, NameTagOptions } from "./nametag";
type ColorCanvasBoxOptions = CanvasBoxOptions & {
    color: Color | string;
};
export type CreatureHeadOptions = ColorCanvasBoxOptions & {
    neckGap?: number;
    faceColor: Color | string;
};
export type CreatureBodyOptions = ColorCanvasBoxOptions;
export type CreatureLegOptions = ColorCanvasBoxOptions & {
    betweenLegsGap?: number;
    frontBackGap?: number;
};
export type CreatureOptions = {
    swingLerp?: number;
    walkingSpeed?: number;
    idleLegSwing?: number;
    positionLerp?: number;
    rotationLerp?: number;
    nameTagOptions?: Partial<NameTagOptions>;
    head?: Partial<CreatureHeadOptions>;
    body?: Partial<CreatureBodyOptions>;
    legs?: Partial<CreatureLegOptions>;
};
export declare const defaultCreatureOptions: CreatureOptions;
export declare const defaultCreatureHeadOptions: CreatureHeadOptions;
export declare const defaultCreatureBodyOptions: CreatureBodyOptions;
export declare const defaultCreatureLegOptions: CreatureLegOptions;
export declare class Creature extends Group {
    options: CreatureOptions;
    headGroup: Group;
    bodyGroup: Group;
    frontLeftLegGroup: Group;
    frontRightLegGroup: Group;
    backLeftLegGroup: Group;
    backRightLegGroup: Group;
    head: CanvasBox;
    body: CanvasBox;
    frontLeftLeg: CanvasBox;
    frontRightLeg: CanvasBox;
    backLeftLeg: CanvasBox;
    backRightLeg: CanvasBox;
    nametag: NameTag;
    speed: number;
    manualSpeed: boolean;
    positionLerpOverride: number | null;
    newPosition: Vector3;
    newDirection: Quaternion;
    extraData: unknown;
    onMove: () => void;
    onIdle: () => void;
    private clock;
    private positionBuffer;
    private interpolationDelay;
    constructor(options?: Partial<CreatureOptions>);
    update(): void;
    private interpolateFromBuffer;
    snapToTarget(): void;
    set(position: number[], direction: number[]): void;
    set username(username: string);
    get username(): string;
    get totalHeight(): number;
    set bodyColor(color: string | Color);
    get bodyColor(): string | Color;
    set headColor(color: string | Color);
    get headColor(): string | Color;
    set faceColor(color: string | Color);
    get faceColor(): string | Color;
    set legColor(color: string | Color);
    get legColor(): string | Color;
    private createModel;
    private calculateDelta;
    private lerpAll;
    private playLegsWalkingAnimation;
}
export {};
//# sourceMappingURL=creature.d.ts.map