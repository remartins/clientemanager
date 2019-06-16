import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private notify = new Subject();
  public notfyObservable$ = this.notify.asObservable();

  constructor(private toastrService: ToastrService) { }

  showSuccess( message) {
    this.toastrService.success( message, 'Sucesso');
    this.notify.next(true);
  }

  showWarning(message) {
    this.toastrService.warning(message, 'Atenção');
    this.notify.next(true);
  }

  showError(message) {
    this.toastrService.error(message, 'Erro');
    this.notify.next(true);
  }

}
