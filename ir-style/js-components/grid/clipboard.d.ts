import { IRGrid } from './grid';
export declare type GridClipboardManager = ReturnType<typeof createGridClipboardManager>;
export declare function createGridClipboardManager(grid: IRGrid): {
    getSelectedText: () => string;
    convertText: (payload: string) => string[][];
};
//# sourceMappingURL=clipboard.d.ts.map