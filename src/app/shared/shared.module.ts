import { MaterialModule } from './../material/material.module';
import { RouterModule } from '@angular/router';
import { SpinnerComponent } from './spinner/spinner.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DashboardColumnComponent } from './widget/dashboard-column/dashboard-column.component';
import { DashboardProgressBarComponent } from './widget/dashboard-progress-bar/dashboard-progress-bar.component';
import { DashboardTableComponent } from './widget/dashboard-table/dashboard-table.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EditDialogBoxComponent } from './edit-dialog-box/edit-dialog-box.component';



@NgModule({
  declarations: [
    SpinnerComponent,
    DashboardColumnComponent,
    DashboardProgressBarComponent,
    DashboardTableComponent,
    PageNotFoundComponent,
    EditDialogBoxComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    RouterModule,
    MaterialModule,
    HighchartsChartModule
  ],
  exports:[
    SpinnerComponent,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    RouterModule,
    MaterialModule,
    DashboardColumnComponent,
    DashboardProgressBarComponent,
    DashboardTableComponent,
    HighchartsChartModule,
    EditDialogBoxComponent
  ]
})
export class SharedModule { }
