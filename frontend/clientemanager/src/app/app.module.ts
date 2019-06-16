import { ConfigService, configServiceInitializerFactory } from './core/config.service';
import { APP_INITIALIZER, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
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
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';

import { AppRoutingModule } from './app-routing.module';

import { TextMaskModule } from 'angular2-text-mask';


import { TokenInterceptor } from './core/token.interceptor';

import { ClienteConsultaComponent } from './components/cliente/cliente-consulta/cliente-consulta.component';
import { ClienteEditarComponent } from './components/cliente/cliente-editar/cliente-editar.component';
import { TipoTelefonePipe } from './core/pipes/tipo-telefone.pipe';
import { TelefonePipe } from './core/pipes/telefone.pipe';
import { FieldMessageErrorComponent } from './components/field-message-error/field-message-error.component';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ClienteConsultaComponent,
    ClienteEditarComponent,
    TipoTelefonePipe,
    TelefonePipe,
    FieldMessageErrorComponent
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
    HttpClientModule,
    TextMaskModule
  ],
  exports: [
    TipoTelefonePipe,
    TelefonePipe
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
  bootstrap: [AppComponent],
  schemas: [
		CUSTOM_ELEMENTS_SCHEMA
	]
})
export class AppModule { }
