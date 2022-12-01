import type { IRGridCell } from './cell';
import type { IRGrid } from "./grid";
export declare const createIRGridColumnSortManager: (grid: IRGrid) => {
    enabledColumnClick: boolean;
    clearNumberColumns(): void;
    clearSortOrder(): void;
    removeNumberColumns(...num: number[]): void;
    setNumberColumns(...num: number[]): void;
    compareTo(a: IRGridCell, b: IRGridCell): number;
    overrideColumnClickEvent(): void;
    sortColumn(col: number, order: "ASC" | "DESC"): void;
    toggleSortColumn(cell: IRGridCell): void;
};
//# sourceMappingURL=sort-by-column.d.ts.map