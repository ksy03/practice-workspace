import codemirror from "codemirror";
import { IRComponent } from "../base";
import "codemirror/mode/sql/sql";
import "codemirror/addon/hint/show-hint";
import "codemirror/addon/hint/sql-hint";
import "codemirror/addon/dialog/dialog";
import "codemirror/addon/scroll/annotatescrollbar";
import "codemirror/addon/search/search";
import "codemirror/addon/search/jump-to-line";
import "codemirror/addon/search/matchesonscrollbar";
import "codemirror/addon/search/searchcursor";
import "codemirror/mode/xml/xml";
import "./mode";
export declare type IREditorMode = keyof typeof editorModeMap;
declare const editorModeMap: {
    "ir-db-rule": string;
    "ir-rule-exp": string;
    "sql-mysql": string;
    "sql-oracle": string;
    xml: string;
};
declare type Gutter = {
    className: string;
    style: string;
};
export interface IREditorArgs {
    contextElement: HTMLElement;
    mode?: IREditorMode;
    code?: string;
    keyEvents?: Record<string, () => void>;
    gutters?: Array<Gutter | string>;
}
export declare class IREditor extends IRComponent {
    editor: codemirror.Editor;
    private _showWhitespace;
    constructor({ contextElement, mode, code, keyEvents, gutters }: IREditorArgs);
    get cursor(): {
        startY: number;
        startX: number;
        endY: number;
        endX: number;
        x: number;
        y: number;
    };
    get lineCount(): number;
    get selectedText(): string;
    get currentLine(): string;
    get code(): string;
    get showWhitespace(): boolean;
    set code(code: string);
    set showWhitespace(visible: boolean);
    addLineGutter(lineNumber: number, key: string, marker: HTMLElement): void;
    removeLineGutter(lineNumber: number, key: string): void;
    addLineClass(lineNumber: number, key: "background" | "wrap", cls: string): void;
    removeLineClass(lineNumber: number, key: "background" | "wrap", cls: string): void;
    getLineText(line: number): string;
    openFindDialog(): void;
    getSearchCursor(pattern: string, startY?: number, startX?: number): codemirror.SearchCursor;
    openReplaceDialog(): void;
    setSelection(startY: number, startX: number, endY: number, endX: number): void;
    getTextWithCursor(startY: number, startX: number, endY: number, endX: number): string;
    getPreText(y: number, x: number): string;
    getPostText(y: number, x: number): string;
    onGutterClick(_lineNumber: number): void;
}
export {};
//# sourceMappingURL=editor.d.ts.map