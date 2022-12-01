declare type Permission = "clipboard-read" | "clipboard-write";
export declare const ClipboardManager: {
    check: (permission: Permission) => Promise<PermissionState>;
    getText: () => Promise<string>;
    setText: (text: string) => void;
};
export {};
//# sourceMappingURL=clipboard.d.ts.map