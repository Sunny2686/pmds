import { AuthService } from './authentication/auth.service';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from './shared/shared.service';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public sidebarToggle = false;
  public routeStatus$ = new Observable<any>();
  public hidingShowingMenu = false;
  public isAuth!: boolean;

  constructor(
    private sharedService: SharedService,
    private activeRoute: ActivatedRoute,
    private cdr: ChangeDetectorRef,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    //CHECKING AUTHENTICATION STATE
    this.sharedService.isAuthenticated$.pipe(take(1)).subscribe(val => {
      this.isAuth = val || !!localStorage.getItem('isAuth')
    });
    //HIDING TOOLBAR MENU
    this.sharedService.hidingToolbarMenu$.subscribe(val => this.hidingShowingMenu = val);
  }

  public sidebarToggleEvent() {
    this.sidebarToggle = !this.sidebarToggle;
    this.sharedService.toggleSidebar(this.sidebarToggle);
  }

  public hidingMenu() {
    this.hidingShowingMenu = false;
  }
  public showingMenu() {
    this.hidingShowingMenu = true;
  }

  public logout() {
    this.authService.logout();
  }

}// END OF CLASS
