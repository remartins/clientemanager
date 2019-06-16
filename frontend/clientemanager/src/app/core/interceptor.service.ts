import { map, catchError, switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ApiService } from './api.service';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, empty } from 'rxjs';
import { MessageService } from './message.service';
import { debug } from 'util';


@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(private apiService: ApiService,
              private router: Router,
              private messageService: MessageService) { }

  private isRequestLogin(request: HttpRequest<any>) {
    return request.url === "http://localhost:8080/oauth/token";
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token: string = localStorage.getItem('accessToken');

    if (token && !this.isRequestLogin(request)) {
      request = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + token) });
    }

    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          console.log('Event ', event);
        }
        return event;
      }),
      catchError((error => {

        if (error instanceof HttpErrorResponse) {
          switch (error.status) {
            case 409:
              this.messageService.showWarning('O e-mail utilizado no cadastro está sendo usado por outro usuário!');
              return this.handleErrorGeneral(error);
            case 404:
              this.messageService.showError('Favor verificar se o seu e-mail foi didigato corretamente');
              return this.handleErrorGeneral(error);
            case 403:
              console.log('error 403');
              //return this.getAccessToken(request, next);
              return this.router.navigate(['login']);
            case 0:
             console.log('error 0');
             localStorage.removeItem('accessToken');
             return this.getAccessToken(request, next);
            case 401:
             return this.handle401Error(error);
            case 400:
              this.messageService.showError('Usuário ou senha invávalidos');
              return this.router.navigate(['login']);
            case 303:
             return this.handle303Error(error);
          }
        }
        Observable.throw(error);
      })));
  }
  private getAccessToken(req: HttpRequest<any>, next: HttpHandler): Observable<any> {
    return this.apiService.getAccessToken(localStorage.getItem('refreshToken'))
    .pipe(
    switchMap(
        resp => {
            localStorage.setItem('accessToken', resp.access_token);
            const token = localStorage.getItem('accessToken');
            req = req.clone({ headers: req.headers.set('Authorization', 'Bearer ' + token) });
            return next.handle(req);
        }
    ));
  }

  handleErrorGeneral(error) {
    if ( error.status === 409 || error.status === 404 ) {
      return empty();
    }
    return empty();
  }

  handle303Error(error) {
    if (error.error.message === 'invalidToken') {
      this.messageService.showError('Token Inválido, favor solicitar novo token');
      return this.router.navigate(['resend-register-token']);
    } else if (error.error.message === 'expired') {
      this.messageService.showError('Token expirou, favor solicitar novo token');
      return this.router.navigate(['resend-register-token']);
    }
    return empty();
  }
  handle401Error(error) {
    if (error.error.error_description === 'UserNotEnabled') {
      this.messageService.showError('Favor habilitar o seu acesso atgravés do e-mail de verificação');
      return this.router.navigate(['login']);
    }
    return empty();
  }
}
