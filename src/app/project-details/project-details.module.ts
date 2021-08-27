import { MaterialModule } from './../material/material.module';
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { SharedModule } from '../shared/shared.module';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { FinancialOverrunTableComponent } from './financial-overrun-table/financial-overrun-table.component';

@NgModule({
  declarations:[ProjectDetailsComponent, FinancialOverrunTableComponent],
  imports:[CommonModule, SharedModule, MaterialModule],
  exports:[ProjectDetailsComponent]
})
export class ProjectDetailsModule{}
