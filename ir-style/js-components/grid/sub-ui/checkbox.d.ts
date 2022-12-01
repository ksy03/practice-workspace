import { IRGridCellMetaInfo } from "../cell";
export declare type GridCheckboxClickEvent = (_row: number, _col: number, _checked: boolean) => void;
export interface RenderGridCheckboxArgs {
    onCheckboxClick?: GridCheckboxClickEvent;
}
export declare const renderGridCheckbox: ({ onCheckboxClick }: RenderGridCheckboxArgs) => (row: number, col: number, data: IRGridCellMetaInfo) => HTMLDivElement;
//# sourceMappingURL=checkbox.d.ts.map