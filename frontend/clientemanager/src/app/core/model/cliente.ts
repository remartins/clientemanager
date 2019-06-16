import { Email } from './email';
import { Telefone } from './telefone';


export class Cliente {

	id: number;
  nome: string;
  cpf: number;
  cep: number;
  logradouro: string;
  bairro: string;
  cidade: string;
  uf: string;
  complemento: string;

  telefones: Telefone[] = [];
  public emails: Email[] = [];


}
