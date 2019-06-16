import { InterceptorService } from './core/interceptor.service';
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
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {MenubarModule} from 'primeng/menubar';


import { AppRoutingModule } from './app-routing.module';

import { TextMaskModule } from 'angular2-text-mask';




import { ClienteConsultaComponent } from './components/cliente/cliente-consulta/cliente-consulta.component';
import { ClienteEditarComponent } from './components/cliente/cliente-editar/cliente-editar.component';
import { TipoTelefonePipe } from './core/pipes/tipo-telefone.pipe';
import { TelefonePipe } from './core/pipes/telefone.pipe';
import { FieldMessageErrorComponent } from './components/field-message-error/field-message-error.component';
import { TransferObject } from './core/trasfer-object';
import { CabecalhoComponent } from './components/cabecalho/cabecalho.component';
import { ToastrModule } from 'ngx-toastr';
import { MessageService } from './core/message.service';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ClienteConsultaComponent,
    ClienteEditarComponent,
    TipoTelefonePipe,
    TelefonePipe,
    FieldMessageErrorComponent,
    CabecalhoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CardModule,
    PanelModule,
    ButtonModule,
    TableModule,
    DropdownModule,
    ConfirmDialogModule,
    MenubarModule,
    ToastModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    TextMaskModule,
    ToastrModule.forRoot({
      timeOut: 4000,
      positionClass: 'toast-top-center'
    })
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
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true },
    TransferObject,
    MessageService
  ],
  bootstrap: [AppComponent],
  schemas: [
		CUSTOM_ELEMENTS_SCHEMA
	]
})
export class AppModule { }
