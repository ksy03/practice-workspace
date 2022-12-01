import { IRComponent } from "../base";
export interface IRDatePickerArgs {
    div: HTMLDivElement;
    wrapper?: Element;
    defaultDate?: Date;
    format?: string;
    checkbox?: boolean;
    disabled?: boolean;
    minDate: Date;
    maxDate: Date;
    onSelect?: (_date: Date) => void;
    onChange?: (_value: string) => void;
}
export declare class IRDatePicker extends IRComponent {
    private selectedDate;
    private calendarDate;
    private format;
    private div;
    private input;
    private button;
    private handler;
    private latestValue?;
    private _minDate;
    private _maxDate;
    constructor({ div, defaultDate, format, checkbox, disabled, onSelect, onChange, minDate, maxDate }: IRDatePickerArgs);
    get textValue(): string;
    get inputCheckbox(): HTMLInputElement | null;
    get date(): Date | null;
    get isVisible(): boolean;
    get disabled(): boolean;
    get minDate(): Date;
    get maxDate(): Date;
    set minDate(value: Date);
    set maxDate(value: Date);
    set disabled(bool: boolean);
    setDate(date: Date | null): void;
    show(): void;
    hide(): void;
    onSelect(_date: Date): void;
    onChange(_value: string): void;
    private updateCalendar;
}
//# sourceMappingURL=datePicker.d.ts.map