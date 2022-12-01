export const TEXT_ROW_SPACE: 2;
export const TEXT_PADDING: 10;
export function getTextMetrics(text: string, style: {
    fontSize: string;
    fontFamily: string;
}): {
    width: number;
    height: number;
};
export function getWrappedText(style: {
    width: number;
    text: string;
    fontFamily: string;
    fontSize: number;
}): {
    length: number;
    lineHeight: number;
    lines: string[];
};
export function getFittedSizeOnText(data: {
    text: string;
    fontFamily: string;
    fontSize: string;
}): {
    width: number;
    height: number;
};
export function getCroppedText(data: {
    text: string;
    fontFamily: string;
    fontSize: string;
}, height: number): {
    length: number;
    lineHeight: number;
    lines: string[];
};
//# sourceMappingURL=text-metrics.d.ts.map