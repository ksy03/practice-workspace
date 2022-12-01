import { IRGridCellMetaInfo } from "./cell";
import { IRGridButtonClickHandler } from './sub-ui';
export declare const renderGridCellDefault: () => (_row: number, _col: number, data: IRGridCellMetaInfo) => HTMLDivElement;
export interface RendererGridIconButtonArgs {
    onClick?: IRGridButtonClickHandler;
}
export declare function renderGridCellIconButton({ onClick }: RendererGridIconButtonArgs): (row: number, col: number, data: IRGridCellMetaInfo) => HTMLDivElement;
export declare function renderRowNoHeaderCell(fixedRowCount: number, ...prevCaptionList: string[]): (row: number, _col: number, data: IRGridCellMetaInfo) => HTMLDivElement;
//# sourceMappingURL=cell-renderer.d.ts.map