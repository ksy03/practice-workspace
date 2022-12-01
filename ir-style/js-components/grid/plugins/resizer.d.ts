import type { IRGrid } from '../grid';
export interface ResizerPluginOptions {
    enabledColResizer: boolean;
    enabledRowResizer: boolean;
}
export declare function ResizerPlugin(options: ResizerPluginOptions): (grid: IRGrid, table: HTMLTableElement, context: HTMLElement) => IRGrid;
//# sourceMappingURL=resizer.d.ts.map