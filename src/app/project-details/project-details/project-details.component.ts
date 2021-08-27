import { EditDialogBoxComponent } from './../../shared/edit-dialog-box/edit-dialog-box.component';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectDetailsComponent implements OnInit {
  public outcomes:string[] = ['Publications', 'Patients', 'Products Created', 'Products Developed', 'Products Commercialized', 'Man Power Trained', 'Public Private Partnership', 'International Collaboration','Startups Created'];
  public projectDetailsForm!: FormGroup;
  private dialogRef!: MatDialogRef<any>;
  public outcomeInput = new FormControl('');
  public openOutcomeInput = false;
  public overrunValue: string = 'No';
  public objectives: any[] = [
    'Scientific partnership of the ESRF',
    ' To enable access to macromolecular crystallography beamlines (ID23-1, ID29, ID30B, ID30A-1, ID23-2 and ID30A-3)',
    'To enable access to the Small Angle Scattering beamline (BM29) for collection of Small Angle X-ray Scattering Data from samples of macromolecules/macromolecular complexes prepared in India.',
    'To hold periodic training workshops in India',
    ' Collection of X-ray Diffraction and Small Angle X-ray Scattering data and on-site training.',
    ' Collection of X-ray Diffraction and Small Angle X-ray Scattering data and on-site training.'
  ];
  constructor(
    private dataService: DataService,
    private fb: FormBuilder,
    private dialog: MatDialog) { }

  ngOnInit(): void {
    console.log(this.overrunValue)
    this.projectDetailsForm = this.fb.group({
      background: ['', [Validators.required]],
      objectives: ['', [Validators.required]],
      overlapping: ['', [Validators.requiredTrue]],
      financialOverrun: ['', [Validators.requiredTrue]]
    });
  }
  public editBackground(data: string, inputType:string) {
    this.dialogRef = this.dialog.open(EditDialogBoxComponent, {
      height: '250px',
      width: '600px',
      data: {data:data, inputType:inputType}
    });

    this.dialogRef.afterClosed().subscribe((result) => {
      if(result){
        return
      }
    });
  }
public addingOutcome(){
  if(this.outcomeInput.value){
    this.outcomes.push(this.outcomeInput.value);
    this.openOutcomeInput = false;
  }
}
public deleteOutcome(){
  this.outcomes.pop();
}
public close(){
  this.openOutcomeInput = false;
}

}//END OF CLASS
