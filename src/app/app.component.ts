import { AuthService } from './authentication/auth.service';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from './shared/shared.service';
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { take } from 'rxjs/operators';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  private subs = new SubSink();

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
    this.subs.sink = this.sharedService.isAuthenticated$.subscribe(val => {
      this.isAuth = val || !!localStorage.getItem('isAuth')
    });
    //HIDING TOOLBAR MENU
    this.subs.sink = this.sharedService.hidingToolbarMenu$.subscribe(val => this.hidingShowingMenu = val);
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
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}// END OF CLASS
