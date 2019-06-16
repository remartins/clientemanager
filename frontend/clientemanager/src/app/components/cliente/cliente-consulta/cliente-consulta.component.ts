import { BaseComponent } from './../../../core/base.component';
import { Router } from '@angular/router';
import { Cliente } from './../../../core/model/cliente';
import { ClienteService } from './../../../core/cliente.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { TransferObject } from 'src/app/core/trasfer-object';

@Component({
  selector: 'app-cliente-consulta',
  templateUrl: './cliente-consulta.component.html',
  styleUrls: ['./cliente-consulta.component.scss'],
  providers: [ConfirmationService, MessageService]
})
export class ClienteConsultaComponent extends BaseComponent implements OnInit {

  formulario: FormGroup;
  clientes: Cliente[];

  constructor(
    protected messageService: MessageService,
    private clienteService: ClienteService,
    private confirmationService: ConfirmationService,
    private router: Router,
    private transferObject:TransferObject) {

    super(messageService);
  }



  ngOnInit() {
    this.formulario = new FormGroup({
      nome: new FormControl('', Validators.required)
    });

    this.consultarTodos();
  }

  consultarTodos() {
    this.clienteService.consultarTodos().subscribe(res => {
      this.clientes = res;
    }, err => { });
  }

  consultar() {
    this.clienteService.consultarClientePorNome(this.formulario.controls['nome'].value).subscribe(res => {
      this.clientes = res;
    }, err => { });
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
          this.removerItemLista(cliente, this.clientes);
          this.showMessageSucess("Registro excluído com sucesso");
        }, err => {
          this.showMessageError("Erro ao excluir o registro");
        });
      }
    });
  }

  public editar(cliente: Cliente) {
    this.transferObject.storage = {acao: 'editar', cliente: cliente};
    //this.transferObject.storage = cliente;
    this.router.navigate(['cliente-editar']);
  }

}
