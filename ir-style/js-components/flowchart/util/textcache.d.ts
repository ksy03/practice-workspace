export default class TextCache {
    text: string;
    length: number;
    width: number;
    height: number;
    x: number;
    y: number;
    compareTo(data: CacheData): boolean;
    update(data: CacheData): void;
    clear(): void;
}
export type CacheData = {
    text: string;
    length: number;
    width: number;
    height: number;
    x: number;
    y: number;
};
//# sourceMappingURL=textcache.d.ts.map