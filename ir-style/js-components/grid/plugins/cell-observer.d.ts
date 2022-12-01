import type { IRGrid } from '../grid';
declare interface RowObserverPluginOption {
    onCellInfoChanged: (_grid: IRGrid, _row: number, _col: number) => void;
}
export declare function CellObserverPlugin(option: RowObserverPluginOption): (grid: IRGrid) => {
    turnOn: () => import("emittery").UnsubscribeFn;
    turnOff: () => void;
};
export {};
//# sourceMappingURL=cell-observer.d.ts.map