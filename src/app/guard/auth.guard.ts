import { SharedService } from './../shared/shared.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  private isAuth!: boolean;

  constructor(
    private shareService: SharedService,
    private router: Router
  ) {
    this.shareService.isAuthenticated$.pipe(take(1)).subscribe(value => {
      this.isAuth = value || !!localStorage.getItem('isAuth');
    })
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | boolean | UrlTree {
    if (this.isAuth) {
      return true;
    } else {
      return this.router.parseUrl('/login');
    }

  }
}
