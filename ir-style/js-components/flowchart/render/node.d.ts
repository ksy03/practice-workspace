export default class NodeRenderer extends BaseRenderer {
    constructor(data: any, className: any, icontainer: any);
    svg: import("d3-selection").Selection<any, any, any, any>;
    connectors: any[];
    resizers: any[];
    comments: any[];
    get width(): any;
    get height(): any;
    get connectorVisibility(): any;
    get resizerVisibility(): any;
    _createComments(): void;
    _createResizer(): void;
    _createConnector(): void;
    _renderComments(): void;
    _renderConnector(): void;
    _renderResizer(): void;
    getConnectorPosition(): Generator<{
        x: any;
        y: number;
        dir: string;
    } | {
        x: number;
        y: any;
        dir: string;
    }, void, unknown>;
    getResizerPosition(): Generator<(string | number)[], void, unknown>;
    _getLabelRect(): {
        x: number;
        y: number;
        width: any;
        height: any;
    };
}
import BaseRenderer from "./base";
//# sourceMappingURL=node.d.ts.map