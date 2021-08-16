import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-dashboard-column-widget',
  templateUrl: './dashboard-column.component.html',
  styleUrls: ['./dashboard-column.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardColumnComponent  {
  Highcharts: typeof Highcharts = Highcharts; // required
  chartConstructor: string = 'chart'; // optional string, defaults to 'chart'
  chartOptions: Highcharts.Options = {}; // required
  chartCallback: Highcharts.ChartCallbackFunction = function (chart) { } // optional function, defaults to null
  updateFlag: boolean = false; // optional boolean
  oneToOneFlag: boolean = true; // optional boolean, defaults to false
  runOutsideAngular: boolean = false; // optional boolean, defaults to false
  constructor() { }








}//END OF CLASS
