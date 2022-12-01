import { IRGrid } from './grid';
import { IRGridRange } from './utils';
export declare type GridCellGenerator = ReturnType<typeof createGridCellGenerator>;
export declare function createGridCellGenerator(grid: IRGrid): {
    getSelectionGenerator: ({ top, left, bottom, right }: IRGridRange) => Generator<import("./cell").IRGridCell, void, unknown>;
    getSelectionHeaderIterator: ({ top, left, bottom, right }: IRGridRange) => Generator<import("./cell").IRGridCell, void, unknown>;
    getSelectionHeaderBorderRight: ({ top, bottom }: IRGridRange) => Generator<import("./cell").IRGridCell, void, unknown>;
    getSelectionHeaderBorderBottom: ({ left, right }: IRGridRange) => Generator<import("./cell").IRGridCell, void, unknown>;
};
//# sourceMappingURL=iterator.d.ts.map