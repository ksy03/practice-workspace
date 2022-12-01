export interface ClickOutSideArgs {
    eventElements: Array<HTMLElement>;
    initFunc?: ClickOutsideInitFunc;
    clickOutsideFunc?: ClickOutsideClickFunc;
}
export declare type ClickOutsideHandler = ReturnType<typeof createClickOutsideHandler>;
export declare function createClickOutsideHandler({ eventElements, initFunc, clickOutsideFunc }: ClickOutSideArgs): {
    create: () => void;
    destroy: () => void;
};
//# sourceMappingURL=outside.d.ts.map