export default class ObjectMouseHandler {
    constructor(icontainer: ContainerInterface);
    icontainer: ContainerInterface;
    tmpOut: boolean;
    tooltip: {
        objId: null;
        mouseOverTimer: d3.Timer;
        mouseOutTimer: d3.Timer;
        g: d3.Selection<any, any, any, any>;
        textCache: TextCache;
    };
    isfirefox: boolean;
    commonOverOutAction(obj: RenderObject): void;
    createTooltipObj(objData: {}, x: number, y: number): void;
    removeTooltipObj(): void;
    addMouseAction(obj: RenderObject): void;
}
import ContainerInterface from "./icontainer";
import * as d3 from "d3";
import TextCache from "./textcache";
import RenderObject from "../obj/base";
//# sourceMappingURL=objmousehandler.d.ts.map