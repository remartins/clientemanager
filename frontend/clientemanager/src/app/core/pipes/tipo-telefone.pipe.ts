import { TipoTelefone } from './../model/tipoTelefone';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'tipoTelefone' })
export class TipoTelefonePipe implements PipeTransform {
	transform(value: number) {

		if (value) {

			if (value === TipoTelefone.CELULAR) {
        return "Celular";
      }
      if (value === TipoTelefone.RESIDENCIAL) {
        return "Residencial";
      }
      if (value === TipoTelefone.COMERCIAL) {
        return "Comercial";
      }

		}

		return value;
	}
}
