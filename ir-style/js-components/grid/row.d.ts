import { IRGridCell } from './cell';
export interface IRGridRowArgs {
    row: number;
    height: number;
    rowType: IRGridRowType;
    top: number;
}
export declare type IRGridRowType = "col-header" | "body";
export declare const GRID_HEIGHT_PROPERTY = "--grid-cell-height";
export declare class IRGridRow {
    private cells;
    private row;
    private rowElement;
    private _rowType;
    private _isMounted;
    private _top;
    private _maxCellHeight;
    constructor({ row, height, rowType, top }: IRGridRowArgs);
    get rowInnerHeight(): number;
    get isFreezed(): boolean;
    get isMounted(): boolean;
    get rowId(): number;
    get isHeader(): boolean;
    get cellCounts(): number;
    get element(): HTMLTableRowElement;
    get textColor(): string;
    get height(): number;
    get bottom(): number;
    get bottomByCellHeight(): number;
    get top(): number;
    get rowType(): IRGridRowType;
    get visible(): boolean;
    set rowId(row: number);
    set customRowZId(zId: number);
    set textColor(color: string);
    set height(height: number);
    set top(value: number);
    set visible(visible: boolean);
    unmount(): void;
    updateMaxCellHeight(): void;
    removeCells(left: number, right: number): void;
    addCell(cell: IRGridCell): void;
    insertCells(cells: IRGridCell[], col: number): void;
    render(): void;
    getCell(col: number): IRGridCell;
    getCellGenerator(left?: number, right?: number): Generator<IRGridCell, void, unknown>;
    setColumnVisible(col: number, visible: boolean): void;
    getColumnVisible(col: number): boolean;
    setAutoHeight(minSize: number, maxSize: number): boolean;
    getCellLeft(col: number): number;
    setCellLeft(col: number, left: number): void;
    setStickyHeader(fixedColCount: number): void;
    mount(tbody: HTMLTableSectionElement, target?: HTMLElement): void;
    freeze(): void;
    freezeHeader(): void;
    unfreeze(): void;
    onMounted(_row: IRGridRow): void;
    onChangedHeight(_row: IRGridRow, _height: number): void;
}
//# sourceMappingURL=row.d.ts.map