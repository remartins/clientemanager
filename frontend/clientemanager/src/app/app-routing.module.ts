import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ClienteConsultaComponent } from './components/cliente/cliente-consulta/cliente-consulta.component';
import { AuthGuard } from './core/guards/auth.guard';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cliente-consulta', component: ClienteConsultaComponent,  canActivate: [AuthGuard], canLoad: [AuthGuard] },
  { path: 'cliente-editar', component: ClienteConsultaComponent,  canActivate: [AuthGuard], canLoad: [AuthGuard] },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
