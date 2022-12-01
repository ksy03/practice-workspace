export default class BaseCommand {
    constructor(command: string, icontainer: ContainerInterface);
    command: string;
    icontainer: ContainerInterface;
    undo(): BaseCommand;
    redo(): BaseCommand;
}
import ContainerInterface from "../../util/icontainer";
//# sourceMappingURL=base.d.ts.map