export default class ElbowConnectionRenderer extends ConnectionRenderer {
    constructor(data: any, icontainer: any);
    adjusterList: any[];
    elbowMap: {
        top: (srcLoc: any, desLoc: any, srcNext: any, desNext: any, desPos: any) => Generator<{
            x: number;
            y: any;
        } | {
            x: any;
            y: number;
        }, void, unknown>;
        bottom: (srcLoc: any, desLoc: any, srcNext: any, desNext: any, desPos: any) => Generator<{
            x: number;
            y: any;
        } | {
            x: any;
            y: number;
        }, void, unknown>;
        left: (srcLoc: any, desLoc: any, srcNext: any, desNext: any, desPos: any) => Generator<{
            x: any;
            y: number;
        } | {
            x: number;
            y: any;
        }, void, unknown>;
        right: (srcLoc: any, desLoc: any, srcNext: any, desNext: any, desPos: any) => Generator<{
            x: any;
            y: number;
        } | {
            x: number;
            y: any;
        }, void, unknown>;
    };
    _getNextXY(pos: any, loc: any): {
        x: any;
        y: any;
    };
    _topTo(srcLoc: any, desLoc: any, srcNext: any, desNext: any, desPos: any): Generator<{
        x: number;
        y: any;
    } | {
        x: any;
        y: number;
    }, void, unknown>;
    _bottomTo(srcLoc: any, desLoc: any, srcNext: any, desNext: any, desPos: any): Generator<{
        x: number;
        y: any;
    } | {
        x: any;
        y: number;
    }, void, unknown>;
    _leftTo(srcLoc: any, desLoc: any, srcNext: any, desNext: any, desPos: any): Generator<{
        x: any;
        y: number;
    } | {
        x: number;
        y: any;
    }, void, unknown>;
    _rightTo(srcLoc: any, desLoc: any, srcNext: any, desNext: any, desPos: any): Generator<{
        x: any;
        y: number;
    } | {
        x: number;
        y: any;
    }, void, unknown>;
    _getElbowPoints(srcLoc: any, desLoc: any, srcPos: any, desPos: any): any[];
    _getPolylinePath(points: []): string;
    _getLabelPos(pathPoints: any): {
        x: number;
        y: number;
    };
    _getPosToDir(pos: any): "v" | "h";
    _getFirstPointDir(): "v" | "h";
    _createAdjustList(adjustPoints: any): void;
    _getPos(srcLoc: any, desLoc: any): {
        srcPos: any;
        desPos: any;
    };
    refreshAdjustList(): void;
    _renderAdjustList(): void;
}
import ConnectionRenderer from "./connection";
//# sourceMappingURL=elbow.d.ts.map