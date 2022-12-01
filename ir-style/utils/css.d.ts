declare type UndefinedCSSStyle = {
    [key in keyof CSSStyleDeclaration]?: CSSStyleDeclaration[key];
};
export declare function getCssText(css: UndefinedCSSStyle): string;
export {};
//# sourceMappingURL=css.d.ts.map