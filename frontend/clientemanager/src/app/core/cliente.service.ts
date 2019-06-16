import { Cliente } from './model/cliente';

import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, empty, Observable, of, Subject, EMPTY, throwError } from 'rxjs';


import { ConfigService } from './config.service';
import { environment } from 'src/environments/environment';





@Injectable({ providedIn: 'root' })
export class ClienteService {


  private url: string = environment.serverUrl + "clientes/";


  constructor(
    private http: HttpClient,
    private config: ConfigService,
    private router: Router
  ) {

  }

  public consultarClientePorNome(nome?: string): Observable<any> {
    let httpParams: HttpParams = new HttpParams().set('nome', nome);
    return this.http.get(this.url + "consultar-nome/" + nome, this.options());
  }

  public consultarTodos(): Observable<any> {
    return this.http.get(this.url, this.options());
  }

  public incluir(cliente: Cliente): Observable<any> {
    return this.http.post(this.url, cliente, this.options());
  }

  public excluir(id: number): Observable<any> {
    return this.http.delete(this.url + id, this.options());
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
