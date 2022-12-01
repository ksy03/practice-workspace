export class ChangedInfo {
    constructor(objData: {}, propList: {
        key: string;
        newValue;
        oldValue;
    }[]);
    objData: {};
    propList: {
        key: string;
        newValue: any;
        oldValue: any;
    }[];
    addMoveOldValues(): void;
    addSizeOldValues(): void;
    updateSizeNewValues(): void;
    updateMoveNewValues(): void;
}
export default class EditCommand extends BaseCommand {
    constructor(changeInfoList: ChangedInfo[], icontainer: ContainerInterface);
    changeInfoList: ChangedInfo[];
    _setValue(prop: any): void;
    undo(): EditCommand;
    redo(): EditCommand;
}
import BaseCommand from "./base";
import ContainerInterface from "../../util/icontainer";
//# sourceMappingURL=edit.d.ts.map