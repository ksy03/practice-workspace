export declare function appendElement<T extends keyof HTMLElementTagNameMap>(parent: Element, tagName: T, ...classes: string[]): HTMLElementTagNameMap[T];
export declare function hasClass(element: HTMLElement, cls: string, until: Element | null): HTMLElement | null;
export declare function getElement(selector: string): Element;
//# sourceMappingURL=dom.d.ts.map