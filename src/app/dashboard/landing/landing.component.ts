import { Router } from '@angular/router';
import { SharedService } from './../../shared/shared.service';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LandingComponent implements OnInit {
  public projectCost: any[] = [{ cost: '10-20', color: '#1b64e2' }, { cost: '20-50', color: '#5cb85c' }, { cost: '50-100', color: '#f75616' }, { cost: '100+', color: '#d32323' }];
  public links = ['HRD Details', 'Medical Equipment', 'New Publictaion', 'Ongoing Project'];
  constructor(
    private sharedService: SharedService,
    private route: Router
  ) { }

  public toggleSidebar$ = new Observable<boolean>();

  ngOnInit(): void {
    this.toggleSidebar$ = this.sharedService.sidebarToggle$;
  }//END OF NG ON INIT

  public viewProjectLists(color: string) {
    this.route.navigate(['/project-lists'], { queryParams: { colorCode: color }});
    this.sharedService.hidingMenu(false);
  }

}
