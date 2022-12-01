import type { IRGridCellMetaInfo } from '../cell';
import type { IRGrid } from '../grid';
export interface UndoOptions {
    stackLength: number;
    disabled: boolean;
}
declare type ChangedProperty = {
    key: keyof IRGridCellMetaInfo;
    oldValue: unknown;
    newValue: unknown;
};
interface UpdateCellsContext {
    top: number;
    left: number;
    bottom: number;
    right: number;
    cellInfoList: ChangedProperty[];
}
declare type CommandKey = "UPDATE_CELLS";
declare type CommandArgMap = {
    UPDATE_CELLS: UpdateCellsContext;
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
    constructor(grid: IRGrid, options: UndoOptions);
    clearRedoStacks(): void;
    clearUndoStacks(): void;
    pushCommand<T extends CommandKey>({ type, context }: UndoCommandArgs<T>): void;
    undo(): void;
    redo(): void;
    private createUpdateCellsRunner;
}
export {};
//# sourceMappingURL=undo-redo.d.ts.map