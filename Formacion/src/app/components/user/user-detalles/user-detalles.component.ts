import { Component, OnInit } from '@angular/core';
import { StaticInjector } from '../../../../../node_modules/@angular/core/src/di/injector';

@Component({
  selector: 'app-user-detalles',
  templateUrl: './user-detalles.component.html',
  styleUrls: ['./user-detalles.component.css']
})
export class UserDetallesComponent implements OnInit {

  name: string;
  surname: string;
  country: string;
  province: string;
  address: string;
  zip: number;
  mail: string;
  phone: number;


  constructor() {
    this.name = 'Pepito';
    this.surname = 'Pérez';
    this.country = 'España';
    this.province = 'Madrid';
    this.address = 'Calle Mayor, 1';
    this.zip = 28001;
    this.mail  = 'pepitoperez@mail.com';
    this.phone = 666666666;


  }

  ngOnInit() {
  }

}
