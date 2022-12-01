import { IRTreeRenderer } from "./renderer";
import { IRTreeNode } from "./treeNode";
import { IRComponent } from "../base";
export interface IRTreeArgs<T> {
    contextElement: HTMLElement;
    data?: T;
    renderer?: IRTreeRenderer<T>;
}
export declare class IRTree<T = unknown> extends IRComponent {
    private root;
    private nodes;
    private selectedNode;
    private renderer;
    constructor({ contextElement, renderer }: IRTreeArgs<T>);
    get items(): IRTreeNode<T>[];
    get selected(): IRTreeNode<T> | null;
    set selected(node: IRTreeNode<T> | null);
    onDblClick(node: IRTreeNode<T>): void;
    onToggleClick(node: IRTreeNode<T>): void;
    onLabelClick(node: IRTreeNode<T>): void;
    onSelectNode(_: IRTreeNode<T>): void;
    onReleaseNode(_: IRTreeNode<T>): void;
    onRemoveNode(_: IRTreeNode<T>): void;
    onChanged(_: IRTreeNode<T> | null): void;
    onExpanding(_: IRTreeNode<T>): boolean;
    onExpand(_: IRTreeNode<T>): void;
    onCollapsing(_: IRTreeNode<T>): boolean;
    onCollapse(_: IRTreeNode<T>): void;
    onDragStartNode(node: IRTreeNode<T>, ev: DragEvent): void;
    onDragOverOnNode(_node: IRTreeNode<T>, _ev: DragEvent): boolean;
    onDropOnNode(_node: IRTreeNode<T>, _ev: DragEvent): void;
    onRenderNode(_node: IRTreeNode<T>, _element: HTMLElement): void;
    addChild(parent: IRTreeNode<T> | null, caption: string, data: T): IRTreeNode<T>;
    selectNode(node: IRTreeNode<T>): void;
    clear(): void;
    expandAll(): void;
    collapseAll(): void;
    expandTo(to: IRTreeNode): void;
    getDropNode(ev: DragEvent): HTMLElement | null | undefined;
}
//# sourceMappingURL=tree.d.ts.map