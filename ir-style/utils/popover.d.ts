import { PopoverType } from "./classNames";
export interface PopoverArgs {
    selector?: string;
    element?: HTMLElement;
    type: PopoverType;
    escClose?: boolean;
    parentElement?: HTMLElement;
    onESC?: () => void;
    onInit?: (element: HTMLElement, handler: ReturnType<typeof createPopover>) => void;
}
export interface IRPopover {
    get element(): HTMLElement;
    show: () => void;
    hide: () => void;
    bringToTop: () => void;
}
export declare const createPopover: ({ selector, element, type, onESC, escClose, parentElement, onInit }: PopoverArgs) => {
    readonly element: HTMLElement;
    show: () => any | undefined;
    hide: () => any;
    bringToTop: () => void;
};
//# sourceMappingURL=popover.d.ts.map