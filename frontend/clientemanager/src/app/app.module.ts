import { ConfigService, configServiceInitializerFactory } from './core/config.service';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';

import { CardModule } from 'primeng/card';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import {TableModule} from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';

import { AppRoutingModule } from './app-routing.module';
import { TokenInterceptor } from './core/token.interceptor';
import { ClienteConsultaComponent } from './components/cliente/cliente-consulta/cliente-consulta.component';
import { ClienteEditarComponent } from './components/cliente/cliente-editar/cliente-editar.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ClienteConsultaComponent,
    ClienteEditarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CardModule,
    PanelModule,
    ButtonModule,
    TableModule,
    DropdownModule,
    ToastModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ConfigService, {
      provide: APP_INITIALIZER,
      useFactory: configServiceInitializerFactory,
      deps: [ConfigService],
      multi: true
    },
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
