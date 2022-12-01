export interface IRGridRange {
    top: number;
    left: number;
    bottom: number;
    right: number;
}
export declare function checkContainsInRange(row: number, col: number, range: IRGridRange): boolean;
export declare function getCellElementRowCol(cell: HTMLTableCellElement): {
    row: number;
    col: number;
};
export declare function checkRowContainsInRange(row: number, range: IRGridRange): boolean;
export declare function checkColContainsInRange(col: number, range: IRGridRange): boolean;
export declare function toggleClass(element: HTMLElement, cls: string, addFlag: boolean): void;
export declare function getCellInnerHeight(element: HTMLElement): number;
//# sourceMappingURL=utils.d.ts.map