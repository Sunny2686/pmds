import { SharedService } from './../shared/shared.service';
import { Injectable, OnDestroy } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SubSink } from 'subsink';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, OnDestroy {
  private isAuth!: boolean;
  private subs = new SubSink();

  constructor(
    private shareService: SharedService,
    private router: Router
  ) {
  this.subs.sink =  this.shareService.isAuthenticated$.subscribe(value => {
      this.isAuth = value || !!localStorage.getItem('isAuth');
    })
    console.log(this.isAuth)
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | boolean | UrlTree {
    if (this.isAuth) {
      return true;
    } else {
      return this.router.parseUrl('/login');
    }

  }


ngOnDestroy():void{
  this.subs.unsubscribe();
}



}//END OF CLASS
