export interface LoadingArgs {
    contextElement: HTMLElement;
    onClick: (_ev: MouseEvent) => void;
    animated?: boolean;
    startDelay?: number;
}
export declare const createLoadingHandler: ({ contextElement, onClick, animated, startDelay }: LoadingArgs) => {
    updatePos: () => void;
    show: () => void;
    _hide(): void;
    hide(): void;
};
//# sourceMappingURL=loading.d.ts.map