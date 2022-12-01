import { ConfirmButtonTypeList } from "./confirm.elements";
import { GlobalKeyFunc } from "../../utils";
export declare type ConfirmType = "info" | "error" | "question" | "warning";
export declare type ConfirmButtonType = typeof ConfirmButtonTypeList[number];
export declare type ConfirmMessageMap = {
    [_ in ConfirmButtonType]?: string;
};
export interface IRConfirmArgs {
    iconType?: ConfirmType;
    buttonType?: ConfirmButtonType[];
    messageHTML: string;
    msgMap?: ConfirmMessageMap;
    onClick?: (_btnType: ConfirmButtonType) => void;
    escButton?: ConfirmButtonType;
    enterButton?: ConfirmButtonType;
}
export declare class IRConfirm {
    private escController;
    iconType: ConfirmType;
    buttonType: ConfirmButtonType[];
    messageHTML: string;
    msgMap: ConfirmMessageMap;
    visible: boolean;
    enterButton?: ConfirmButtonType;
    escButton?: ConfirmButtonType;
    enterHandler?: GlobalKeyFunc;
    escHandler?: GlobalKeyFunc;
    constructor({ iconType, buttonType, messageHTML, msgMap, onClick, escButton, enterButton }: IRConfirmArgs);
    show(): void;
    onESC(): void;
    hide(): void;
    onClick(_btnType: ConfirmButtonType): void;
}
//# sourceMappingURL=confirm.d.ts.map