import { IRGridCell } from './cell';
import { IRGrid } from './grid';
import * as utils from './utils';
declare type IRGridFinderArea = "all" | "selection" | "selected-col" | "selected-row" | "custom";
declare type IRGridFinderDirection = "top-bottom" | "left-right";
export interface IRGridFinderOptions {
    ignoreCase: boolean;
    matchAll: boolean;
    area: IRGridFinderArea;
    direction: IRGridFinderDirection;
    text: string;
    customRange?: utils.IRGridRange;
    hasHeaderRows?: boolean;
    hasHeaderColumns?: boolean;
}
export interface IRGridFinderArgs {
    onCellCheck?: (regexp: RegExp, cell: IRGridCell) => boolean;
}
export declare function createIRGridFinder(grid: IRGrid, args: IRGridFinderArgs): {
    resetCursor: () => void;
    findNext: (options: IRGridFinderOptions) => IRGridCell | null;
    getAllMatchedCell: (options?: IRGridFinderOptions) => IRGridCell[];
};
export {};
//# sourceMappingURL=finder.d.ts.map