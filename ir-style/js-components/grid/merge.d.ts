import { IRGridCell } from './cell';
import { IRGrid } from './grid';
import { IRGridRange } from './utils';
export declare type MergeHandler = ReturnType<typeof createMergeHandler>;
export declare function createMergeHandler(grid: IRGrid): {
    isValidatedMerging: ({ top, left, bottom, right }: IRGridRange) => boolean;
    getMergedRowHeight: (top: number, bottom: number) => number;
    mergeCells: (range: IRGridRange) => void;
    splitCells: (row: number, col: number) => void;
    isMerged: (row: number, col: number) => boolean;
    getMergedCellGenerator(range: IRGridRange): Generator<IRGridCell, void, unknown>;
    removeMergeCell: (row: number, col: number) => void;
    checkConflictingInRows(top: number, bottom: number): boolean;
    checkConflictingInColumns(left: number, right: number): boolean;
    checkCanInsertRow(rowId: number): boolean;
    checkCanInsertColumn(columnId: number): boolean;
};
//# sourceMappingURL=merge.d.ts.map