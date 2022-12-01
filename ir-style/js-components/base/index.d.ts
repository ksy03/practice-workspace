export interface IRComponentArgs {
    contextElement: HTMLElement;
}
export declare class IRComponent {
    protected contextElement: HTMLElement;
    protected resizeObserver?: ResizeObserver;
    private coreElements;
    private globalEvents;
    constructor({ contextElement }: IRComponentArgs);
    get hasUUID(): boolean;
    get uuid(): string;
    destroy(): void;
    addCoreElement<T extends HTMLElement>(element: T): T;
    addGlobalEventListener(object: HTMLElement | Document, event: keyof HTMLElementEventMap, handler: (_ev: any) => any): void;
    protected onDestroy(): void;
    protected generateScrollBar(): void;
    private initUUID;
}
//# sourceMappingURL=index.d.ts.map