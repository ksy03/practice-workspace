export default class Group extends RenderObject {
    constructor(data: any, renderer: any, icontainer: any);
    objectSet: Set<any>;
    rect: {
        x: number;
        y: number;
        width: number;
        height: number;
    };
    get startX(): number;
    get startY(): number;
    get x(): number;
    get y(): number;
    get width(): number;
    get height(): number;
    get endX(): number;
    get endY(): number;
    select(userInteraction: any, typeClick?: string): void;
    resize(): void;
    moveTo(): void;
    hasObjId(objId: any): boolean;
    destroyAll(): void;
    clear(): void;
    addObject(id: any): void;
    removeObject(id: any): void;
}
import RenderObject from "./base";
//# sourceMappingURL=group.d.ts.map