import { Chart } from "chart.js";
import { IRChart, IRChartArgs } from './chart';
export interface IRLineChartData {
    label: string;
    borderColor: string;
    data: number[];
    fill: boolean;
    tension: number;
}
export interface IRLineChartArgs extends IRChartArgs {
    labels: string[];
    dataSource: IRLineChartData[];
}
export declare class IRLineChart extends IRChart {
    canvas: HTMLCanvasElement;
    chart: Chart;
    constructor(args: IRLineChartArgs);
}
//# sourceMappingURL=line-chart.d.ts.map