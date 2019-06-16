import { Router } from '@angular/router';
import { Cliente } from './../../../core/model/cliente';
import { ClienteService } from './../../../core/cliente.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import {ConfirmationService} from 'primeng/api';

@Component({
  selector: 'app-cliente-consulta',
  templateUrl: './cliente-consulta.component.html',
  styleUrls: ['./cliente-consulta.component.scss'],
  providers: [ConfirmationService]
})
export class ClienteConsultaComponent implements OnInit {

  formulario: FormGroup;
  clientes: Cliente[];

  constructor(
    private clienteService: ClienteService,
    private confirmationService: ConfirmationService,
    private router: Router) { }

  ngOnInit() {
    this.formulario = new FormGroup({
      nome: new FormControl('', Validators.required)
    });

    this.consultarTodos();
  }

  consultarTodos() {
    this.clienteService.consultarTodos().subscribe(res => {
      this.clientes = res;
    }, err => {});
  }

  consultar() {
    this.clienteService.consultarClientePorNome(this.formulario.controls['nome'].value).subscribe(res => {
      this.clientes = res;
    }, err => {});
  }

  incluir() {
    this.router.navigate(['cliente-editar']);
  }

  public excluir(cliente: Cliente) {

    this.confirmationService.confirm({
      message: 'Deseja realmente excluir o registro ?',
      header: 'Confirmação',
      acceptLabel: "Sim",
      rejectLabel: "Não",
      accept: () => {
          this.clienteService.excluir(cliente.id).subscribe(res => {
              this.clientes = res;
            }, err => {});
      }
    });

    // this.clienteService.consultarClientePorNome(this.formulario.controls['nome'].value).subscribe(res => {
    //   this.clientes = res;
    // }, err => {});
  }

}
