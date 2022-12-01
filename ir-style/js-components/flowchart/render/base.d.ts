export default class BaseRenderer {
    constructor(data: {}, className: string, iContainer: ContainerInterface);
    data: {};
    className: string;
    iContainer: ContainerInterface;
    textCache: TextCache;
    dataWrapper: StyleDataWrapper;
    container: import("d3-selection").Selection<import("d3-selection").BaseType, any, any, any>;
    group: import("d3-selection").Selection<SVGGElement, any, any, any>;
    objects: {
        foreignObj: import("d3-selection").Selection<any, any, any, any>;
        textarea: import("d3-selection").Selection<any, any, any, any>;
        text: import("d3-selection").Selection<SVGTextElement, any, any, any>;
    };
    get width(): void;
    get height(): void;
    get subUiVisilbility(): "hidden" | "visible";
    get isHovered(): any;
    _getLabelRect(): {
        x: number;
        y: number;
        width: number;
        height: number;
    };
    _repositionTextarea(): void;
    removeLabelEdit(): void;
    cancelLabelEdit(oldText: any): void;
    editLabelMode(): void;
    bringToFrontElement(element: any): void;
    create(): void;
    _create(): void;
    render(): void;
    _render(): void;
    _getLabelXY(info: any): {
        x: number;
        y: number;
    };
    _createText(x?: number, y?: number): void;
    destroy(): void;
}
import ContainerInterface from "../util/icontainer";
import TextCache from "../util/textcache";
import StyleDataWrapper from "../data/wrapper";
//# sourceMappingURL=base.d.ts.map