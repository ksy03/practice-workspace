export default class StyleDataWrapper {
    constructor(data: StyleData);
    data: StyleData;
    _getPostFix(): "" | ".selected" | ".hovered";
    get(key: string): any;
}
import StyleData from "./styledata";
//# sourceMappingURL=wrapper.d.ts.map