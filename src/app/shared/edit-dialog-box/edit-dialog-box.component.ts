import { FormControl } from '@angular/forms';
import { Component, OnInit, ChangeDetectionStrategy, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-dialog-box',
  templateUrl: './edit-dialog-box.component.html',
  styleUrls: ['./edit-dialog-box.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditDialogBoxComponent implements OnInit {
  input: FormControl = new FormControl('');
  constructor(
    public dialogRef: MatDialogRef<EditDialogBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { data: string, inputType: string }
  ) { }

  ngOnInit(): void {
    this.input.setValue(this.data.data);
  }
  public onSave() {
    if(this.input.value === ''){ }
    this.dialogRef.close(this.input.value)
  }
}
