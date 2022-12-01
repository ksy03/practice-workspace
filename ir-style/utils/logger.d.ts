declare const LOG_LEVEL_MAP: {
    readonly ERROR: 0;
    readonly WARNING: 1;
    readonly DEBUG: 2;
    readonly INFO: 3;
};
export declare class Logger {
    private id;
    private _logLevel;
    constructor(id: string, logLevel?: "ERROR" | "WARNING" | "DEBUG" | "INFO");
    get logLevel(): keyof typeof LOG_LEVEL_MAP;
    set logLevel(logLevel: keyof typeof LOG_LEVEL_MAP);
    error(...data: unknown[]): void;
    warn(...data: unknown[]): void;
    debug(...data: unknown[]): void;
    info(...data: unknown[]): void;
}
export {};
//# sourceMappingURL=logger.d.ts.map