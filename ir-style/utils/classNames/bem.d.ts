export declare const StateList: readonly ["is-hidden", "is-dragging", "is-active", "is-expanded", "is-collapsed", "is-selected", "has-children", "is-visible", "is-disabled", "is-diff", "is-same", "is-readonly", "is-error", "is-resizing"];
export declare type StateType = typeof StateList[number];
export interface BEMClassArgs<T_Modifier, T_State> {
    block: string;
    element?: string;
    modifier?: T_Modifier[];
    state?: readonly T_State[];
}
export declare function BEMClass<T_Modifier extends string, T_State extends StateType = never>({ block, element, modifier, state }: BEMClassArgs<T_Modifier, T_State>): {
    blockElementName: string;
    toString: () => string;
} & { [T in T_Modifier]: `${string}--${T}`; } & { [T_1 in T_State]: T_1; };
//# sourceMappingURL=bem.d.ts.map