declare const _default: {
    progress: {
        blockElementName: string;
        toString: () => string;
    } & {
        secondary: `${string}--secondary`;
        tertiary: `${string}--tertiary`;
        info: `${string}--info`;
        warning: `${string}--warning`;
        danger: `${string}--danger`;
    } & {};
    bar: {
        blockElementName: string;
        toString: () => string;
    } & {
        [x: string]: `${string}--${string}`;
    } & {};
    VALUE_PROPERTY: string;
    PERCENT_PROPERTY: string;
};
export default _default;
//# sourceMappingURL=progress.classNames.d.ts.map