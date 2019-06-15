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
export class AuthGuard implements CanActivate, CanLoad {

  constructor(
    private apiService: ApiService,
    private router: Router) {

      console.log('init guard');
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.apiService.isAuthenticated().pipe(take(1));
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    return this.apiService.isAuthenticated().pipe(take(1));
  }

}
