export interface ESCHiding {
    hide: () => unknown;
    onESC?: ESCEvent;
}
export declare type ESCEvent = () => void;
export declare type ESCHideController = ReturnType<typeof createESCHideController>;
export declare function createESCHideController(obj: ESCHiding): {
    create: () => void;
    destroy: () => void;
};
//# sourceMappingURL=esc-hide.d.ts.map