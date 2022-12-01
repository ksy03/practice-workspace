import { IRGridCellMetaInfo } from "../cell";
import { IRSelectItem } from "../..";
export declare type GridComboBoxChangeEvent = (_row: number, _col: number, _value: string, _text: string, _beforeValue: string | undefined, _beforeText: string | undefined) => void;
export interface RenderGridSelectArgs {
    items: IRSelectItem[];
    onChange?: GridComboBoxChangeEvent;
}
export declare const renderGridSelect: ({ items, onChange }: RenderGridSelectArgs) => (row: number, col: number, data: IRGridCellMetaInfo) => HTMLDivElement;
//# sourceMappingURL=select.d.ts.map