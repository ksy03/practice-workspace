import type { IRGridCellMetaInfo } from './cell';
import type { IRGrid } from './grid';
export interface UndoOptions {
    stackLength: number;
    disabled: boolean;
    commandFilter?: CommandKey[];
}
export declare type ChangedProperty = {
    key: keyof IRGridCellMetaInfo;
    oldValue: string;
    newValue: string;
    row: number;
    col: number;
};
export declare type CommandKey = "UPDATE_CELLS" | "ADD_ROW" | "ADD_COLUMN" | "CHANGE_COL_WIDTH" | "CHANGE_ROW_HEIGHT";
declare interface CommandRunner {
    undo: () => void;
    redo: () => void;
}
export interface UndoCommand {
    type: CommandKey;
    context: unknown;
    commandRunner: CommandRunner;
}
declare type CommandArgMap = {
    UPDATE_CELLS: {
        cellInfoList: ChangedProperty[];
    };
    ADD_ROW: {
        row: number;
        height?: number;
    };
    ADD_COLUMN: {
        col: number;
        width?: number;
    };
    CHANGE_COL_WIDTH: {
        col: number;
        newSize: number;
        oldSize: number;
    };
    CHANGE_ROW_HEIGHT: {
        row: number;
        newSize: number;
        oldSize: number;
    };
};
interface UndoCommandArgs<T extends CommandKey> {
    type: T;
    context: CommandArgMap[T];
}
export declare class UndoManager {
    private options;
    private undoStack;
    private redoStack;
    private grid;
    private commandFilterSet;
    private readonly commandMap;
    constructor(grid: IRGrid, options: UndoOptions);
    get isDisabled(): boolean;
    clearRedoStacks(): void;
    clearUndoStacks(): void;
    pushCommand<T extends CommandKey>({ type, context }: UndoCommandArgs<T>): void;
    undo(): UndoCommand | undefined;
    redo(): UndoCommand | undefined;
}
export {};
//# sourceMappingURL=undo-redo.d.ts.map