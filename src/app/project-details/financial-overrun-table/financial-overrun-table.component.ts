import { FormControl } from '@angular/forms';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

const ELEMENT_DATA = [
  {position: 1, grantSharing:'None', infrastructureSharing: '2005-10', industryPartnership: '2016-17', otherMinisteries:'None', policyRelated:'None'},
  {position: 2, grantSharing:'3002-11', infrastructureSharing: '2005-10', industryPartnership: '2016-17', otherMinisteries:'None', policyRelated:'None'},
  {position: 3, grantSharing:'None', infrastructureSharing: '2005-10', industryPartnership: '2016-17', otherMinisteries:'None', policyRelated:'None'},
  {position: 4, grantSharing:'None', infrastructureSharing: '2005-10', industryPartnership: '2016-17', otherMinisteries:'None', policyRelated:'None'},
  {position: 5, grantSharing:'None', infrastructureSharing: '2005-10', industryPartnership: '2016-17', otherMinisteries:'None', policyRelated:'None'},
];
@Component({
  selector: 'app-financial-overrun-table',
  templateUrl: './financial-overrun-table.component.html',
  styleUrls: ['./financial-overrun-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FinancialOverrunTableComponent {
  displayedColumns: string[] = ['position', 'Grant Sharing', 'Infrastructure Sharing', 'Industry Partnership', 'Other Ministeries/Agensis', 'Policy Related'];
  dataSource = ELEMENT_DATA;
  public outcomeInput = new FormControl('');
  public openOutcomeInput = false;
  constructor() { }


  public addingColumn(){
    this.displayedColumns.push(this.outcomeInput.value);
  }

  public close(){
    this.openOutcomeInput = false;
  }



}//END OF CLASS
