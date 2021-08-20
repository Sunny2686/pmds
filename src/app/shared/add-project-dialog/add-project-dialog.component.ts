import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-add-project-dialog',
  templateUrl: './add-project-dialog.component.html',
  styleUrls: ['./add-project-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddProjectDialogComponent implements OnInit {
public newProject!: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.newProject = new FormGroup({
      projectName: new FormControl('',[Validators.required]),
      projectCost:new FormControl('',[Validators.required])
    })
  }

  public onSave(){

  }
}// END OF CLASS
