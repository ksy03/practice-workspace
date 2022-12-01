import { Chart } from "chart.js";
import { IRChart, IRChartArgs } from './chart';
export interface IRPieChartData {
    label: string;
    color: string;
    data: number[];
}
export interface IRPieChartArgs extends IRChartArgs {
    dataSource: IRPieChartData[];
}
export declare class IRPieChart extends IRChart {
    canvas: HTMLCanvasElement;
    chart: Chart;
    constructor(args: IRPieChartArgs);
}
//# sourceMappingURL=pie-chart.d.ts.map