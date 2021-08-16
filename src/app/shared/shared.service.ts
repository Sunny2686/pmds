import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private sidebarToggle$$ = new BehaviorSubject<boolean>(false);
  public sidebarToggle$ = this.sidebarToggle$$.asObservable();
  private isAuthenticated$$ = new BehaviorSubject<boolean>(false);
  public isAuthenticated$ = this.isAuthenticated$$.asObservable();
  private hidingToolbarMenu$$ = new BehaviorSubject<boolean>(false);
public hidingToolbarMenu$ = this.hidingToolbarMenu$$.asObservable();
  constructor(
    private afAuth: AngularFireAuth,
  ) {
    this.afAuth.onAuthStateChanged((value: any) => {
      this.authentication(!!value);
      if(!!value){
        localStorage.setItem('isAdmin', 'true');
      }
      this.hidingMenu(!!value);
    });
  }

  public toggleSidebar(data: boolean) {
    this.sidebarToggle$$.next(data);
  }

  public authentication(data: boolean) {
    this.isAuthenticated$$.next(data);
  }
  public  hidingMenu(data: boolean) {
    this.hidingToolbarMenu$$.next(data);
  }
}// END OF CLASS
