import { IRGridCellMetaInfo } from "../cell";
import { IRStyleColor } from "../../../types";
export declare type IRGridButtonClickHandler = (_ev: MouseEvent, _row: number, _col: number) => void;
export interface RendererGridButtonArgs {
    onClick?: IRGridButtonClickHandler;
    defaultColor?: IRStyleColor;
    defaultLabel?: string;
    defaultIcon?: string;
}
export declare const renderGridButton: ({ onClick, defaultColor, defaultLabel, defaultIcon }: RendererGridButtonArgs) => (row: number, col: number, data: IRGridCellMetaInfo) => HTMLDivElement;
//# sourceMappingURL=button.d.ts.map