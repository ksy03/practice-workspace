import type { IRTreeNode } from "./treeNode";
export declare type IRTreeRenderer<T = unknown> = (node: IRTreeNode<T>) => HTMLElement;
export declare function renderDefaultTreeNode<T = unknown>(node: IRTreeNode<T>): HTMLDivElement;
interface RenderCheckboxNodeArgs<T> {
    onCheck?: (node: IRTreeNode<T>) => void;
}
export declare function renderCheckboxTreeNode<T = unknown>({ onCheck }: RenderCheckboxNodeArgs<T>): (node: IRTreeNode<T>) => HTMLDivElement;
export {};
//# sourceMappingURL=renderer.d.ts.map