import { AuthenticationService } from './../../core/authentication.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';



import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [MessageService]
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private authentication: AuthenticationService,
    private router: Router,
    private messageService: MessageService
    ) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  login() {
    //this.loadingSubject.next(true);
    this.authentication.login(this.loginForm.value.username, this.loginForm.value.password)
      .then(
        () => {
          //this.loadingSubject.next(false);
          this.messageService.add({severity:'success', summary: 'Success Message', detail:'Order submitted'});
          this.router.navigate(['/']);
        },
        error => {
          //this.snackBar.open('Authentication failed.');
          //this.loadingSubject.next(false);
          this.messageService.add({severity:'error', summary: 'Error Message', detail:'Não foi possível realizar o login !'});
        });
  }

}
