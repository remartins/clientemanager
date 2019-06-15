import { Cliente } from './../../../core/model/cliente';
import { ClienteService } from './../../../core/cliente.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cliente-consulta',
  templateUrl: './cliente-consulta.component.html',
  styleUrls: ['./cliente-consulta.component.scss']
})
export class ClienteConsultaComponent implements OnInit {

  formulario: FormGroup;
  clientes: Cliente[];

  constructor(private clienteService: ClienteService) { }

  ngOnInit() {
    this.formulario = new FormGroup({
      nome: new FormControl('', Validators.required)
    });
  }

  consultar() {
    this.clienteService.consultarClientePorNome("").subscribe(res => {

      this.clientes = res;

      // var result: any[] = res;
      // this.data.storage = { result: result, filtro: this.formulario.value };
      // this.router.navigateByUrl('/manutencao/parametros/email/busca');

    }, err => {})
  }

}
