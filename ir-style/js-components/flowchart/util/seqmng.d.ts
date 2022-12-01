export default class SequenceManager {
    constructor(icontainer: ContainerInterface);
    objSeq: number;
    clickSeq: number;
    icontainer: ContainerInterface;
    clear(): void;
    clearObjSeq(): void;
    clearClickSeq(): void;
    getObjSeqId(): number;
    increaseClickSeq(): number;
}
import ContainerInterface from "./icontainer";
//# sourceMappingURL=seqmng.d.ts.map