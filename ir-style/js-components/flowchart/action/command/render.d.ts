export default class RenderCommand extends BaseCommand {
    constructor(renderObj: RenderObject, oldRender: string, newRender: string, icontainer: any);
    renderObj: RenderObject;
    oldRender: string;
    newRender: string;
    undo(): RenderCommand;
    redo(): RenderCommand;
}
import BaseCommand from "./base";
import RenderObject from "../../obj/base";
//# sourceMappingURL=render.d.ts.map