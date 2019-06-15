import { ApiService } from './../api.service';
import { map, take } from 'rxjs/operators';
import { AuthenticationService } from './../authentication.service';
import { Role, User } from './../model/user';
import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {

  constructor(
    private authentication: AuthenticationService,
    private router: Router) {

      console.log('init guard');
  }



  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.canActivateRoute(next, state);
  }
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.canActivateRoute(next, state);
  }

  private canActivateRoute(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.authentication.loggedUser$.pipe(
      map(loggedUser => {
        const res = this.checkRoute(route, state, loggedUser);
        console.log(`can activate route '${state.url}' '${route.url}' ${res}`);
        return res;
      })
    );
  }

  private checkRoute(route: ActivatedRouteSnapshot, state: RouterStateSnapshot, user: User): boolean {
    if ((!route.data.roles && user)
      || (route.data.roles && !user)
      || (user && route.data.roles && !route.data.roles.includes(user.role)) || state.url === '/') {
      if (user) {
        if (user.role === Role.ADMIN || user.role === Role.COMUM) {
          this.router.navigate(['/cliente-consulta']);
        }
        // else {
        //   this.router.navigate(['/glee']);
        // }
      } else {
        this.router.navigate(['/login']);
      }
      return false;
    }
    this.router.navigate(['/login']);
    return false;
  }
}
