export declare type IRTimePickerClickEvent = (_ev: MouseEvent, _value: string) => void;
export interface IRTimePickerHandlerArgs {
    uuid: string;
    refElement: HTMLElement;
    onChange: IRTimePickerClickEvent;
}
export declare type IRTimePickerHandler = ReturnType<typeof createIRTimePickerHandler>;
export declare function createIRTimePickerHandler({ uuid, refElement, onChange }: IRTimePickerHandlerArgs): {
    setTime(value: string): void;
    show: () => void;
    hide: () => void;
    onESC: () => void;
    readonly visible: boolean;
};
//# sourceMappingURL=timePicker.handler.d.ts.map