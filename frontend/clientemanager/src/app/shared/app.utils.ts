import { HttpHeaders } from '@angular/common/http';

export const BASE_URL = 'http://localhost:8080/';
export const URL_TOKEN = BASE_URL + 'oauth/token';
export const REGISTER_URL = BASE_URL + 'api/public/registration/users';
export const CONFIRM_REGISTER_URL = BASE_URL + 'api/public/regitrationConfirm/users';
export const RESEND_REGISTER_TOKEN_URL = BASE_URL + 'api/public/resendRegistrationToken/users';

const headersToken = new HttpHeaders({
    Authorization: 'Bearer ' + localStorage.getItem('accessToken')
 });
export const OPTIONS_OBJECTO = { headers: headersToken };
export const HEADERS_LOGIN = new HttpHeaders({
 Authorization: 'Basic ' + btoa('app-cliente-manager' + ':' + 'app-cliente-secret')
 });
export const HEADERS_REGISTER = new HttpHeaders({
 Authorization: 'Basic ' + btoa('app-cliente-manager' + ':' + 'app-cliente-secret')
});
export const HEADERS_COMMUN = new HttpHeaders({
 Authorization: 'Basic ' + btoa('app-cliente-manager' + ':' + 'app-cliente-secret')
 });
