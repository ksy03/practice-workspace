declare const _default: {
    _queryPermission(name: string): Promise<PermissionStatus | {
        state: string;
    }>;
    checkClipboardPermission(): Promise<boolean>;
    saveData(data: string): void;
    loadData(): string;
};
export default _default;
//# sourceMappingURL=clipboard.d.ts.map