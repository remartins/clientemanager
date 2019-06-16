import { Component, OnInit, Input } from '@angular/core';
import { FormControlName } from '@angular/forms';

@Component({
  selector: 'app-field-message-error',
  templateUrl: './field-message-error.component.html',
  styleUrls: ['./field-message-error.component.scss']
})
export class FieldMessageErrorComponent implements OnInit {

  @Input() control: FormControlName
  @Input() type: string
  @Input() errorMessage: string

  constructor() { }

  ngOnInit() {
  }

  hasError(): boolean {
    return this.control.invalid && (this.control.dirty || this.control.touched)
  }

  hasInvalidateType() {
    return this.control.errors[this.type];
  }

}
