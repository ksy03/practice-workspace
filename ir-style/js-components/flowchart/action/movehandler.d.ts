export default class MoveHandler {
    constructor(actionController: ActionController, objectManager: ObjectManager, icontainer: ContainerInterface);
    actionController: ActionController;
    objectManager: ObjectManager;
    icontainer: ContainerInterface;
    movedInfo: ChangedInfo[];
    moveStartHandler(): void;
    moveEndHandler(): void;
}
import ActionController from "./controller";
import ObjectManager from "../util/objmng";
import ContainerInterface from "../util/icontainer";
import { ChangedInfo } from "./command/edit";
//# sourceMappingURL=movehandler.d.ts.map