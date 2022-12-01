export default class RenderManager {
    nodeRenderMap: Map<any, any>;
    connectionRenderMap: Map<any, any>;
    etcRenderMap: Map<any, any>;
    _add(map: Map<string, BaseRenderer>, render: string, constructor: () => BaseRenderer): void;
    _get(map: Map<string, BaseRenderer>, key: string): BaseRenderer | undefined;
    addRenderMap(type: any, render: any, constructor: any): void;
    getRenderConstructor(type: string, render: string): BaseRenderer | undefined;
    changeRender(obj: any, render: any, icontainer: any): void;
}
import BaseRenderer from "../render/base";
//# sourceMappingURL=rendermng.d.ts.map