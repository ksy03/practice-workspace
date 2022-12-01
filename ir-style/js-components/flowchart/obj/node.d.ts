export default class Node extends RenderObject {
    constructor(data: any, renderer: NodeRenderer, icontainer: any);
    renderer: NodeRenderer;
    get startX(): any;
    get startY(): any;
    get resizerEnabled(): boolean;
    get isConnectorEnabled(): boolean;
    get centerX(): any;
    get centerY(): any;
    set x(arg: any);
    get x(): any;
    set y(arg: any);
    get y(): any;
    set width(arg: any);
    get width(): any;
    set height(arg: any);
    get height(): any;
    get endX(): any;
    get endY(): any;
    getPositionXY(pos: any): {
        x: any;
        y: any;
    };
    fitSizeOnText(): void;
    resizeToNorth(dy: any): void;
    resizeToWest(dx: any): void;
    addComment(text: any, position: any, event: any): void;
    resizeToEast(dx: any): void;
    resizeToSouth(dy: any): void;
}
import RenderObject from "./base";
import NodeRenderer from "../render/node";
//# sourceMappingURL=node.d.ts.map