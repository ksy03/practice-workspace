import Emittery from 'emittery';
import { IRGrid } from './grid';
export declare type IRGridEmitter = Emittery<{
    updateCellStatus: {
        row: number;
        col: number;
    };
    onCellInfoChanged: {
        row: number;
        col: number;
    };
    onContextResized: undefined;
    onColumnResized: {
        col: number;
    };
}>;
export declare function initIRGridEmitter(grid: IRGrid, emitter: IRGridEmitter): void;
//# sourceMappingURL=emitter.d.ts.map