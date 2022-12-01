import { IRGridCellMetaInfo } from "../cell";
export declare type GridRadioClickEvent = (_row: number, _col: number) => void;
export interface RenderGridRadioArgs {
    onRadioClick?: GridRadioClickEvent;
}
export declare const renderGridRadio: ({ onRadioClick }: RenderGridRadioArgs) => (row: number, col: number, data: IRGridCellMetaInfo) => HTMLDivElement;
//# sourceMappingURL=radio.d.ts.map