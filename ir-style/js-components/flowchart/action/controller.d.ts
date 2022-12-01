export default class ActionController {
    constructor(limit: any);
    actionLimit: any;
    undoStackList: BaseCommand[][];
    redoStackList: BaseCommand[][];
    addAction(...commands: BaseCommand[]): void;
    clear(): void;
    popLastUndoAction(): BaseCommand[] | undefined;
    undo(): BaseCommand[] | null | undefined;
    redo(): BaseCommand[] | null | undefined;
}
import BaseCommand from "./command/base";
//# sourceMappingURL=controller.d.ts.map