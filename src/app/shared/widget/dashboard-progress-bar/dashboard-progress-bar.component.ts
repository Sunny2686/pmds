import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';


@Component({
  selector: 'app-dashboard-progress-bar-widget',
  templateUrl: './dashboard-progress-bar.component.html',
  styleUrls: ['./dashboard-progress-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardProgressBarComponent implements OnInit {
  //DATA TO WORK WITH HIGH CHARTS
  Highcharts: typeof Highcharts = Highcharts; // required
  chartConstructor: string = 'chart'; // optional string, defaults to 'chart'
  chartOptions: Highcharts.Options = {}; // required
  chartCallback: Highcharts.ChartCallbackFunction = function (chart) { } // optional function, defaults to null
  updateFlag: boolean = false; // optional boolean
  oneToOneFlag: boolean = true; // optional boolean, defaults to false
  runOutsideAngular: boolean = false; // optional boolean, defaults to false


  public projectData!: any[];
  constructor(private dataService: DataService) {
    this.projectData = this.dataService.users;
  }
  ngOnInit(): void {
    this.chartOptions = {
      chart: {
        type: 'bar'
      },
      title: {
        text: 'Historic World Population by Region'
      },
      xAxis: {
        categories: ['Africa', 'America', 'Asia', 'Europe', 'Oceania']
      },
      yAxis: {
        min: 0,
        title: {
          text: "Infosys Stock value in dollar"
        },
        labels: {
          overflow: 'justify'
        }
      },
      tooltip: {
        valueSuffix: ' millions'
      },
      plotOptions: {
        bar: {
          dataLabels: {
            enabled: true
          }
        }
      },
      series: [{
        type: 'bar',
        name: 'Year 1800',
        data: [107, 31, 635, 203, 2]
      }, {
        type: 'bar',
        name: 'Year 1900',
        data: [133, 156, 947, 408, 6]
      }, {
        type: 'bar',
        name: 'Year 2000',
        data: [814, 841, 3714, 727, 31]
      }, {
        type: 'bar',
        name: 'Year 2026',
        data: [1216, 1001, 4436, 738, 40]
      }]
    };
    HC_exporting(Highcharts);
    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }//END of ON INIT

}//END OF CLASS
