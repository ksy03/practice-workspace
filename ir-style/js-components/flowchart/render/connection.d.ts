export default class ConnectionRenderer extends BaseRenderer {
    constructor(data: any, className: any, iContainer: IContainer);
    markerId: string;
    checkChanged: {
        points: null;
        srcX: number;
        srcY: number;
        desX: number;
        desY: number;
    };
    get width(): any;
    get height(): number;
    get lastPointId(): number;
    _createConnector(): void;
    _getPosLocation(node: any, pos: any): {
        x: number;
        y: number;
    };
    _getBBox(): DOMRect;
    _renderMarker(): void;
    _renderConnector(): void;
    _getSourceLoc(): {
        x: any;
        y: any;
    };
    _getDestinationLoc(): {
        x: any;
        y: any;
    };
    _recordLastInfo(srcLoc: any, desLoc: any): void;
    _updatePoints(...points: any[]): void;
    _isChanged(srcLoc: any, desLoc: any): boolean;
    _getNodePositionLoc(objId: any, pos: any, pointId: any): {
        x: any;
        y: any;
    };
}
export type TransFormData = {
    translateX: number;
    translateY: number;
    scale: number;
};
export type IContainer = {
    getObjectOrNull: () => Node;
};
import BaseRenderer from "./base";
import Node from "../obj/node";
//# sourceMappingURL=connection.d.ts.map