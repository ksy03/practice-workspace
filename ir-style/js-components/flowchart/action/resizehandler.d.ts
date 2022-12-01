export default class ResizeHandler {
    constructor(actionController: ActionController, objectManager: ObjectManager, icontainer: ContainerInterface);
    actionController: ActionController;
    objectManager: ObjectManager;
    icontainer: ContainerInterface;
    resizeInfo: ChangedInfo[];
    resizeCallback(objId: any, cursor: any, diffWidth: any, diffHeight: any): void;
    resizeDragStart(): void;
    resizeDragEnd(): void;
    addDragActionOnResizer(node: Node): void;
}
import ActionController from "./controller";
import ObjectManager from "../util/objmng";
import ContainerInterface from "../util/icontainer";
import { ChangedInfo } from "./command/edit";
import Node from "../obj/node";
//# sourceMappingURL=resizehandler.d.ts.map