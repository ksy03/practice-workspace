import { IRGridCellMetaInfo } from "../cell";
export declare type GridDatePickerClickEvent = (_row: number, _col: number, _text: string) => void;
export interface RenderDatePickerArgs {
    onDateClick?: GridDatePickerClickEvent;
    format?: string;
    minDate?: Date;
    maxDate?: Date;
}
export declare const renderGridDatePicker: ({ onDateClick, format, minDate, maxDate }: RenderDatePickerArgs) => (row: number, col: number, data: IRGridCellMetaInfo) => HTMLDivElement;
//# sourceMappingURL=datePicker.d.ts.map