import { IRGrid } from './grid';
import { IRGridRange } from './utils';
export declare type GridSelector = ReturnType<typeof createGridSelector>;
export declare function createGridSelector(grid: IRGrid): {
    extendRange: (range: IRGridRange) => IRGridRange;
    releaseCells: (range: IRGridRange) => void;
    selectRange: (range: IRGridRange) => IRGridRange;
};
//# sourceMappingURL=selector.d.ts.map