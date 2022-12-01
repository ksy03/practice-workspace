import { IRGridCellMetaInfo } from "../cell";
import { IRIntent } from "../../../types";
export interface RendererGridProgressArgs {
    min?: number;
    max?: number;
    defaultIntent?: IRIntent;
    afterDecimalLen?: number;
}
export declare const renderGridProgress: ({ min, max, defaultIntent, afterDecimalLen }: RendererGridProgressArgs) => (_row: number, _col: number, data: IRGridCellMetaInfo) => HTMLDivElement;
//# sourceMappingURL=progress.d.ts.map