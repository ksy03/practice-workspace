import { IRComponent } from "../base";
export declare interface IRSelectItem {
    text: string;
    value: string;
    attr: Record<string, string>;
    element: HTMLLIElement;
    option: HTMLOptionElement;
}
export declare interface IRSelectArgs {
    contextElement: HTMLSelectElement;
    onChange?: (_: HTMLSelectElement) => void;
    disabled?: boolean;
    defaultValue?: string | null;
}
export declare function createDropdownDiv(): {
    divDropdown: HTMLDivElement;
    ulItems: HTMLUListElement;
};
export declare function createDropdownItem(value: string, text: string): {
    item: HTMLLIElement;
    button: HTMLButtonElement;
    icon: HTMLElement;
    span: HTMLSpanElement;
};
export declare class IRSelect extends IRComponent {
    divSelect: HTMLDivElement;
    divInput: HTMLDivElement;
    divDropDown: HTMLDivElement;
    inputValue: HTMLInputElement;
    ulItems: HTMLUListElement;
    select: HTMLSelectElement;
    private items;
    private popper;
    private escController;
    private outsideHandler;
    private _value;
    private lastClickedOption?;
    constructor(args: HTMLSelectElement | IRSelectArgs);
    get listItems(): IRSelectItem[];
    get disabled(): boolean;
    get value(): string;
    get text(): string;
    set disabled(bool: boolean);
    set value(value: string);
    clearItems(): void;
    removeItem(value: string): void;
    expand(): void;
    hide(): void;
    toggle(): void;
    addItem(value: string, text: string, attr?: Record<string, string>): HTMLButtonElement;
    onChange(_select: HTMLSelectElement, _option: HTMLOptionElement): void;
    setValueWithoutEvent(value: string): void;
    private hasElementByValue;
    private clearSelectedStatus;
    private selectItem;
    private changeValue;
}
//# sourceMappingURL=select.d.ts.map