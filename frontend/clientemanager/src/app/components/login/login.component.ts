import { ApiService } from './../../core/api.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';



import { MessageService } from 'primeng/api';
import { JwtHelperService } from '@auth0/angular-jwt';
import { User } from 'src/app/core/model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [MessageService]
})
export class LoginComponent implements OnInit {

  private jwtHelper: JwtHelperService;

  loginForm: FormGroup;

  constructor(
    private router: Router,
    private messageService: MessageService,
    private apiService: ApiService,
  ) {
    this.jwtHelper = new JwtHelperService();
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  login() {

    if (this.loginForm.valid) {

      this.apiService.login(this.loginForm.value.username, this.loginForm.value.password)
        .subscribe(data => {
          this.loginSuccess(data);
          console.log(data);
        }, error => {
          console.log(error);
          //this.messageService.add({ severity: 'error', summary: 'Error Message', detail: 'Falha de autenticação' });
        });


      // this.authentication.login(this.loginForm.value.username, this.loginForm.value.password)
      //   .then(
      //     () => {
      //       this.messageService.add({ severity: 'success', summary: 'Success Message', detail: 'Order submitted' });
      //       this.router.navigate(['cliente-consulta']);
      //     },
      //     error => {
      //       this.messageService.add({ severity: 'error', summary: 'Error Message', detail: 'Não foi possível realizar o login !' });
      //     });
    }
  }

  public loginSuccess(data: any) {
    localStorage.clear();
    localStorage.setItem('accessToken', data.access_token);
    localStorage.setItem('refreshToken', data.refresh_token);

    var tokenDecode = this.jwtHelper.decodeToken(data.access_token);
    var user = new User();
    user.email = tokenDecode.user_name;
    user.role = tokenDecode.authorities[0];
    localStorage.setItem('currentUser', JSON.stringify(user));

    this.router.navigate(['cliente-consulta']);
  }

}
