export declare type CalendarClickEvent = (_dt: Date) => void;
export declare type DatePickerHandler = ReturnType<typeof createDatePickerHandler>;
export interface DatePickerHandlerArgs {
    uuid: string;
    refElement: HTMLElement;
    onClick: CalendarClickEvent;
    minDate: Date;
    maxDate: Date;
}
export declare const createDatePickerHandler: ({ uuid, refElement, onClick, minDate, maxDate }: DatePickerHandlerArgs) => {
    readonly visible: boolean;
    update(calendarDate: Date, selectedDate: Date | null): void;
    show(): void;
    hide(): void;
    onESC: () => void;
};
//# sourceMappingURL=datePicker.handler.d.ts.map