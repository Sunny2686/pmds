import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-dashboard-progress-bar-widget',
  templateUrl: './dashboard-progress-bar.component.html',
  styleUrls: ['./dashboard-progress-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardProgressBarComponent  {
public projectData! : any[];
  constructor(private dataService:DataService) {
this.projectData = this.dataService.users;
  }


}
