import { DataService } from 'src/app/services/data.service';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectDetailsComponent {
public objectives:any[] = [
  'Scientific partnership of the ESRF',
  ' To enable access to macromolecular crystallography beamlines (ID23-1, ID29, ID30B, ID30A-1, ID23-2 and ID30A-3)',
  'To enable access to the Small Angle Scattering beamline (BM29) for collection of Small Angle X-ray Scattering Data from samples of macromolecules/macromolecular complexes prepared in India.',
  'To hold periodic training workshops in India',
  ' Collection of X-ray Diffraction and Small Angle X-ray Scattering data and on-site training.',
  ' Collection of X-ray Diffraction and Small Angle X-ray Scattering data and on-site training.'
];
  constructor(private dataService:DataService) { }


}
