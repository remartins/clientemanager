import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cliente-editar',
  templateUrl: './cliente-editar.component.html',
  styleUrls: ['./cliente-editar.component.scss']
})
export class ClienteEditarComponent implements OnInit {

  formularioCliente: FormGroup;

  constructor() { }

  ngOnInit() {
    this.formularioCliente = new FormGroup({
      id: new FormControl('', Validators.required),
      nome: new FormControl('', Validators.required),
      cpf: new FormControl('', Validators.required),
      cep: new FormControl('', Validators.required),
      logradouro: new FormControl('', Validators.required),
      bairro: new FormControl('', Validators.required),
      cidade: new FormControl('', Validators.required),
      uf: new FormControl('', Validators.required),
      complemento: new FormControl(''),
    });
  }

}
