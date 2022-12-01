import { IRComponent, IRComponentArgs } from "../base";
export interface IRTimePickerArgs extends IRComponentArgs {
    value?: string;
    checkbox?: boolean;
    disabled: boolean;
    onChange?: (_value: string) => void;
}
export declare class IRTimePicker extends IRComponent {
    private input;
    private button;
    private timePickerHandler;
    private latestValue;
    private _value?;
    constructor(args: IRTimePickerArgs);
    get hour(): number;
    get minute(): number;
    get inputCheckbox(): HTMLInputElement | null;
    get visible(): boolean;
    get disabled(): boolean;
    get value(): string | undefined;
    set disabled(disabled: boolean);
    set value(value: string | undefined);
    show(): void;
    hide(): void;
    toggle(): void;
    onChange(_value: string): void;
}
//# sourceMappingURL=timePicker.d.ts.map