import type { IRGrid } from "./grid";
export declare function createGridCellCursorManager(grid: IRGrid): {
    getNextYAbove: (row: number, col: number, y: number) => number;
    getNextYBelow: (row: number, col: number, y: number) => number;
    getNextXLeft: (row: number, col: number, x: number) => number;
    getNextXRight: (row: number, col: number, x: number) => number;
    selectNextActiveCell: () => void;
    selectBeforeActiveCell: () => void;
    selectNextSelection: (y: number, x: number, isExpanding: boolean) => void;
    selectMoveToLastColumn: (isExtending: boolean) => void;
    selectMoveToFirstColumn: (isExtending: boolean) => void;
    selectMoveToLastRow: (isExtending: boolean) => void;
    selectMoveToFirstRow: (isExtending: boolean) => void;
};
//# sourceMappingURL=cursor.d.ts.map