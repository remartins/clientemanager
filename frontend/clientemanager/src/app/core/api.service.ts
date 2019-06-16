import { Router } from '@angular/router';
import { environment } from './../../environments/environment';
import * as AppUtils from '../shared/app.utils';


import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { HttpParams, HttpClient, HttpHeaders } from '@angular/common/http';

import { Login } from './model/login';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public baseUrl: string;

  constructor(private httpClient: HttpClient, private config: ConfigService, private router: Router) {
    this.baseUrl = `${AppUtils.BASE_URL}` + 'api/users';
  }

  // private loadAccessToken(retrieveAccessToken: boolean, refreshToken?: string, username?: string, password?: string):
  //   Observable<string> {
  //   console.log(retrieveAccessToken ? 'login' : 'refresh_token');
  //   const params = retrieveAccessToken ?
  //     new HttpParams()
  //       .set('username', username)
  //       .set('password', password)
  //       .set('grant_type', 'password') :
  //     new HttpParams()
  //       .set(refreshTokenKey, refreshToken)
  //       .set('grant_type', refreshTokenKey);
  //   return this.http.post<any>(this.config.config.loginUrl, params,
  //     {
  //       headers: new HttpHeaders().append('Authorization',
  //         'Basic ' + btoa(`${this.config.config.clientId}:${this.config.config.clientSecret}`)),
  //     }
  //   )
  // }

  login(username: string, password: string): Observable<any> {

    const params = new HttpParams()
      .set('username', username)
      .set('password', password)
      .set('grant_type', 'password');

    const options = {
      headers: AppUtils.HEADERS_COMMUN,
      params
    };
    //return this.httpClient.post(AppUtils.URL_TOKEN, params, options);

    return this.httpClient.post<any>(this.config.config.loginUrl, params,
      {
        headers: new HttpHeaders().append('Authorization',
          'Basic ' + btoa(`${this.config.config.clientId}:${this.config.config.clientSecret}`)),
      });
  }

  getMainUser(token: any): Observable<any> {
    return this.httpClient.get<any>(`${this.baseUrl}` + '/main', AppUtils.OPTIONS_OBJECTO);
  }

  getAccessToken(refreshToken): Observable<any> {

    const params = new HttpParams()
      .set('grant_type', 'refresh_token')
      .set('refresh_token', refreshToken);

    const options = {
      headers: AppUtils.HEADERS_COMMUN,
      params
    };
    return this.httpClient.post(AppUtils.URL_TOKEN, null, options);

  }

  isAuthenticated(): Observable<boolean> {
    return new Observable<boolean>(observer => {
      if (JSON.parse(localStorage.getItem('currentUser'))) {
        observer.next(true);
        observer.complete();
      } else {
        //observer.next(false);
        this.router.navigate(['login']);
      }
    });
  }
  // registerUser(user: UserDTO): Observable<any> {
  //   return this.httpClient.post<any>(AppUtils.REGISTER_URL, user, { headers: AppUtils.HEADERS_COMMUN });
  // }
  confirmationRegisterToken(token: string): Observable<any> {
    const params = new HttpParams()
      .set('token', token);
    const options = {
      headers: AppUtils.HEADERS_COMMUN,
      params
    };
    return this.httpClient.get<any>(AppUtils.CONFIRM_REGISTER_URL, options);
  }
  // resendRegisterToken(user: UserDTO): Observable<any> {
  //   const params = new HttpParams()
  //     .set('email', user.email);
  //   const options = {
  //     headers: AppUtils.HEADERS_COMMUN,
  //     params
  //   };
  //   return this.httpClient.get<any>(AppUtils.RESEND_REGISTER_TOKEN_URL, options);
  // }
  getUsers(): Observable<any> {
    return this.httpClient.get<any>(`${this.baseUrl}`, AppUtils.OPTIONS_OBJECTO);
  }
  getRole(roles: Array<any>) {
    let role: any;
    if (this.isAuthenticated() && roles) {
      if (roles.length > 0) {
        roles.forEach(r => {
          role = r.name;
        });
      }
      return role;
    }
  }

  // deleteUser(id: string): Observable<any> {
  //   return this.httpClient.delete<any>(`${this.baseUrl}/${id}}`, AppUtils.OPTIONS_OBJECTO);
  // }
  // getUserById(id: string): Observable<any> {
  //   return this.httpClient.get<any>(`${this.baseUrl}/${id}`, AppUtils.OPTIONS_OBJECTO);
  // }
  // updateUser(user: UserDTO): Observable<any> {
  //   return this.httpClient.put<any>(`${this.baseUrl}/${user.id}`, user, AppUtils.OPTIONS_OBJECTO);
  // }

  logout(): Observable<any> {

    var headersToken = new HttpHeaders({
      Authorization: 'Bearer ' + localStorage.getItem('accessToken')
    });

    localStorage.clear();

    return this.httpClient.post<any>(`${AppUtils.BASE_URL}` + 'logout', null, { headers: headersToken });
  }
}
