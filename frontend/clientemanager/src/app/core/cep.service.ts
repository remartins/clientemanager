
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, empty, Observable, of, Subject, EMPTY, throwError } from 'rxjs';
import { catchError, filter, map, skipWhile, switchMap, tap } from 'rxjs/operators';



import { ConfigService } from './config.service';
import { environment } from 'src/environments/environment';





@Injectable({ providedIn: 'root' })
export class CepService {


  private url: string = "http://viacep.com.br/ws/";


  constructor(
    private http: HttpClient,
    private config: ConfigService,
    private router: Router
  ) {

  }

  public consultarCep(cep: string): Observable<any> {

    return this.http.get(this.url + cep + "/json");

  }


  protected options(
    options?: {
      headers?: HttpHeaders;
      observe?: 'body';
      params?: HttpParams;
      reportProgress?: boolean;
      responseType?: any;
      withCredentials?: boolean;
    }
  ) {
    if (!options) {
      options = {};
    }

    let headers: HttpHeaders = new HttpHeaders();
    if (options.headers) {
      for (const headerName of options.headers.keys()) {
        headers = headers.set(headerName, options.headers.getAll(headerName));
      }
    }
    options.headers = headers;

    if (!options.responseType) {
      options.responseType = 'json';
    }

    if (!options.withCredentials) {
      //options.withCredentials = this.withCredentials;
    }

    return options;
  }


}
