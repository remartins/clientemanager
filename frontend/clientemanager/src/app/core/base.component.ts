import { HttpErrorResponse } from '@angular/common/http';
import { AbstractControl, FormGroup, FormControl } from '@angular/forms';

import { isString, isArray, isDate, isNumber } from 'util';

export class BaseComponent {

    constructor() {
    }

    toNumber(value: string): number {
      return Number.parseInt(this.toNumberString(value))
    }

    toNumberString(value: string): string {
      return value.replace(/\D/g, '');
    }

    public limparCampos(formGroup: FormGroup): void {
      formGroup.reset();
      formGroup.markAsPristine();
      formGroup.markAsUntouched();
      formGroup.updateValueAndValidity();
  }

    validateAllFormFields(formGroup: FormGroup) {
        Object.keys(formGroup.controls).forEach(field => {
            const control = formGroup.get(field);
            if (control instanceof FormControl) {
                control.markAsTouched({ onlySelf: true });
            } else if (control instanceof FormGroup) {
                this.validateAllFormFields(control);
            }
        });
    }

    isFormularioAoMenosUmItemPreenchido(formGroup: FormGroup): boolean {

        for (let field of Object.keys(formGroup.controls)) {
            const control = formGroup.get(field);
            if (control instanceof FormControl) {
                if (this.validarCampos(control.value)) {
                    return true;
                }
            }
        }

        return false;
    }

    private validarCampos(obj: any): boolean {
        if (isString(obj)) {
            if (obj != null && obj.length > 0) {
                return true;
            }
        }
        else if (isArray(obj)) {
            if (obj != null && obj.length > 0) {
                return true;
            }
        }
        else if (isNumber(obj)) {
            if (obj != null) {
                return true;
            }
        }
        else if (isDate(obj)) {
            if (obj != null) {
                return true;
            }
        }
        else if (obj != null) {
            for (let key of Object.keys(obj)) {
                if ("_$visited" != key) {
                    return this.validarCampos(obj[key]);
                }
            }
        }
    }

}
