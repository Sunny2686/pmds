import { SharedModule } from './../shared/shared.module';
import { MaterialModule } from './../material/material.module';
import { ProjectListsComponent } from './project-lists/project-lists.component';
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";

@NgModule({
  declarations:[ProjectListsComponent],
  imports:[CommonModule, MaterialModule, SharedModule],
  exports:[ProjectListsComponent]
})
export class ProjectListsModule{}
