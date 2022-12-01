export declare function updateI18n(): void;
export declare function getTimeElements(hour: number, minute: number): {
    periodElement: HTMLElement;
    hourElement: HTMLElement;
    minuteElement: HTMLElement;
};
export declare function scrollIntoView(hour: number, minute: number): void;
export declare function selectTime(hour: number, minute: number): void;
export declare function isAM(): boolean;
export declare function setPeriod(periodId: number): void;
export declare function setHourId(hourId: number): void;
export declare function setMinuteId(minuteId: number): void;
export declare function periodGenerator(): Generator<readonly [0, HTMLElement] | readonly [1, HTMLElement], void, unknown>;
export declare function getCurrentTime(): string;
export declare function hourGenerator(): Generator<readonly [number, HTMLElement], void, unknown>;
export declare function minuteGenerator(): Generator<readonly [number, HTMLElement], void, unknown>;
declare const _default: {
    timePicker: HTMLDivElement;
    nowButton: HTMLButtonElement;
};
export default _default;
//# sourceMappingURL=timePicker.elements.d.ts.map