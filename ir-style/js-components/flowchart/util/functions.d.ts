export function getConnectedPositionId(node: any, con: any): any;
export function getPosition(clsName: any): "left" | "right" | "bottom" | "top";
export function getTransformData(transform: any): {
    translateX: number;
    translateY: number;
    scale: number;
};
export function getPermission(name: any): Promise<PermissionStatus>;
export function readClipboardText(): Promise<string>;
export function writeClipboardText(text: string): Promise<void>;
export function getDistance(pos1: {
    x: number;
    y: number;
}, pos2: {
    x: number;
    y: number;
}): number;
export function combineStyle(data: any, theme: any): any;
export function defaultRule(data: any): void;
export function getDefaultConnection(appendingObj: any): any;
export function cloneObjDataList(objList: RenderObject[]): any[];
export function deepCopy(data: any): any;
export function getMovePropIterator(objData: {}): Generator<{
    key: string;
    value: any;
}, void, unknown>;
export function updateTextStyle(textObj: import("d3-selection").Selection<any, any, any, any>, x: number, y: number, style: {
    foreColor: string;
    fontFamily: string;
    fontSize: number;
    textDecoration: string;
}): void;
export function createTextLines(textObj: import("d3-selection").Selection<any, any, any, any>, textLines: {
    length: number;
    lines: string[];
    height: number;
}, x: number, y: number, style: {
    foreColor: string;
    fontFamily: string;
    fontSize: number;
    textDecoration: string;
}): void;
export function removeText(textObj: import("d3-selection").Selection<any, any, any, any>, cache: TextCache): void;
export function createLogger(id: string): Logger;
import RenderObject from "../obj/base";
import TextCache from "./textcache";
import { Logger } from "../../../utils/logger";
//# sourceMappingURL=functions.d.ts.map