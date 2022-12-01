export default class ZIndexCommand extends BaseCommand {
    constructor(dataList: {
        objId: string | number;
        oldValue: number | null;
        newValue: number | null;
    }[], icontainer: any);
    dataList: {
        objId: string | number;
        oldValue: number | null;
        newValue: number | null;
    }[];
    _setZId(prop: any, reverse: any): void;
    undo(): ZIndexCommand;
    redo(): ZIndexCommand;
}
import BaseCommand from "./base";
//# sourceMappingURL=zindex.d.ts.map