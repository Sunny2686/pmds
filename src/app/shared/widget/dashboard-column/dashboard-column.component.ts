import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-dashboard-column-widget',
  templateUrl: './dashboard-column.component.html',
  styleUrls: ['./dashboard-column.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardColumnComponent implements OnInit {
  Highcharts: typeof Highcharts = Highcharts; // required
  chartConstructor: string = 'chart'; // optional string, defaults to 'chart'
  chartOptions: Highcharts.Options = {}; // required
  chartCallback: Highcharts.ChartCallbackFunction = function (chart) { } // optional function, defaults to null
  updateFlag: boolean = false; // optional boolean
  oneToOneFlag: boolean = true; // optional boolean, defaults to false
  runOutsideAngular: boolean = false; // optional boolean, defaults to false
  constructor() { }

  ngOnInit():void{
   this.chartOptions= {
      title: {
        text: "Return on investment."
      },
      xAxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
          "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
      },
      yAxis: {
        title: {
          text: "Investment return in rupees."
        }
      },
      series: [{
        data: [12, 380, 493, 35, 20, 90, 100, 110,12,888,-12, 12],
        type: 'line'
      }]
    };

    HC_exporting(Highcharts);
    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }// END OF ON INIT








}//END OF CLASS
