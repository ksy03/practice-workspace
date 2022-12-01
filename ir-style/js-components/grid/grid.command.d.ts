import type { IRGrid } from "./grid";
import type { UndoManager } from "./undo-redo";
import type { IRGridRange } from './utils';
export declare type IRGridCommand = {
    ADD_ROW: {
        height?: number;
    } | undefined;
    ADD_COLUMN: {
        width?: number;
    } | undefined;
    RESIZE_ROW: {
        row: number;
        height: number;
    };
    RESIZE_COLUMN: {
        col: number;
        width: number;
    };
    CLEAR_CELLS: IRGridRange;
    DONE_CELL_EDIT: {
        row: number;
        col: number;
        text: string;
        beforeText: string;
    };
    SET_TEXT: {
        row: number;
        col: number;
        text: string;
    };
};
export declare const createCommandManager: (grid: IRGrid, undoManager: UndoManager) => {
    doCommand<T extends keyof IRGridCommand>(command: T, args: IRGridCommand[T]): void;
};
//# sourceMappingURL=grid.command.d.ts.map