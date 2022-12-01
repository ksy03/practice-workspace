export default class ObjectManager {
    mapList: Map<string | number, RenderObject>[];
    objMap: {
        node: Map<string | number, RenderObject>;
        connection: Map<string | number, RenderObject>;
        group: Map<string | number, RenderObject>;
    };
    getMap(type: string): Map<string | number, RenderObject>;
    getObjCount(): number;
    add(obj: RenderObject): void;
    remove(obj: RenderObject): void;
    getMapIterator(): Generator<Map<string | number, RenderObject>, void, undefined>;
    getNodeIterator(): IterableIterator<Node>;
    getConnectionIterator(): IterableIterator<Connection>;
    getGroupIterator(): IterableIterator<Group>;
    findOrNull(objId: string | number): RenderObject | null | undefined;
    clear(): void;
    getAllObjIterator(): Generator<RenderObject, void, undefined>;
    getSelectedObjIterator(): Generator<RenderObject, void, unknown>;
    getParentGroupOrNull(obj: RenderObject): Group | null;
    getConnectedConnections(nodeId: string | number): Generator<Connection, void, unknown>;
    reassignId(obj: any, oldId: any, newId: any): void;
}
import RenderObject from "../obj/base";
import Node from "../obj/node";
import Connection from "../obj/connection";
import Group from "../obj/group";
//# sourceMappingURL=objmng.d.ts.map