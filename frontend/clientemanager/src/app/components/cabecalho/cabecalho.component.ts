import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ApiService } from 'src/app/core/api.service';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.scss']
})
export class CabecalhoComponent implements OnInit {

  items: MenuItem[];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }

  logout() {
    this.apiService.logout().subscribe(res => {
      console.log("logout");
    }, err => {
      console.log(err);
    });
  }

}
