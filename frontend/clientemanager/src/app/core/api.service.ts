import { environment } from './../../environments/environment';
import * as AppUtils from '../shared/app.utils';


import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';

import { Login } from './model/login';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public baseUrl: string;

  constructor(private httpClient: HttpClient) {

    this.baseUrl = `${AppUtils.BASE_URL}` + 'api/users';
  }

  login(userLogin: Login): Observable <any> {

    const params = new HttpParams()
      .set('username', userLogin.username)
      .set('password', userLogin.password)
      .set('grant_type', 'password');

    const options = {
        headers: AppUtils.HEADERS_COMMUN,
        params
      };
    return this.httpClient.post(AppUtils.URL_TOKEN, null, options);
  }

  // getMainUser(token: any): Observable <any> {
  //   return this.httpClient.get<any>(`${this.baseUrl}` + '/main', AppUtils.OPTIONS_OBJECTO);
  // }

  // getAccessToken(refreshToken): Observable<any>  {

  //   const params = new HttpParams()
  //   .set('grant_type', 'refresh_token')
  //   .set('refresh_token', refreshToken);

  //   const options = {
  //     headers: AppUtils.HEADERS_COMMUN,
  //       params
  //     };
  //   return this.httpClient.post(AppUtils.URL_TOKEN, null,  options);

  //   }

  isAuthenticated(): Observable<boolean> {
    return new Observable<boolean> (observer => {
      if (JSON.parse(localStorage.getItem('currentUser'))) {
        observer.next(true);
        observer.complete();
      } else {
        observer.next(false);
      }
    });
  }
  // registerUser(user: UserDTO): Observable<any> {
  //   return this.httpClient.post<any>(AppUtils.REGISTER_URL, user, {headers: AppUtils.HEADERS_COMMUN});
  // }
  // confirmationRegisterToken(token: string): Observable<any> {
  //   const params = new HttpParams()
  //     .set('token', token);
  //   const options = {
  //       headers: AppUtils.HEADERS_COMMUN,
  //       params
  //     };
  //   return this.httpClient.get<any>(AppUtils.CONFIRM_REGISTER_URL, options);
  // }
  // resendRegisterToken(user: UserDTO): Observable<any> {
  //   const params = new HttpParams()
  //     .set('email', user.email);
  //   const options = {
  //       headers: AppUtils.HEADERS_COMMUN,
  //       params
  //     };
  //   return this.httpClient.get<any>(AppUtils.RESEND_REGISTER_TOKEN_URL, options);
  // }
  // getUsers(): Observable<any> {
  //   return this.httpClient.get<any>(`${this.baseUrl}`, AppUtils.OPTIONS_OBJECTO);
  // }
  // getRole(roles: Array<any>) {
  //   let role: any;
  //   if (this.isAuthenticated() && roles) {
  //     if (roles.length > 0) {
  //       roles.forEach(r => {
  //         role = r.name;
  //       });
  //     }
  //     return role;
  //   }
  // }
  // deleteUser(id: string): Observable<any> {
  //   return this.httpClient.delete<any>(`${this.baseUrl}/${id}}`, AppUtils.OPTIONS_OBJECTO);
  // }
  // getUserById(id: string): Observable<any> {
  //   return this.httpClient.get<any>(`${this.baseUrl}/${id}`, AppUtils.OPTIONS_OBJECTO);
  // }
  // updateUser(user: UserDTO): Observable<any> {
  //   return this.httpClient.put<any>(`${this.baseUrl}/${user.id}`, user, AppUtils.OPTIONS_OBJECTO);
  //   }
  //   logout(): Observable<any> {
  //     return this.httpClient.get<any>(`${AppUtils.BASE_URL}` + 'api/logout', AppUtils.OPTIONS_OBJECTO);
  //   }
}
