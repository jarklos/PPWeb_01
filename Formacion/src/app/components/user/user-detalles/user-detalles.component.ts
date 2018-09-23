import { Component, OnInit } from '@angular/core';
import { StaticInjector } from '../../../../../node_modules/@angular/core/src/di/injector';

@Component({
  selector: 'app-user-detalles',
  templateUrl: './user-detalles.component.html',
  styleUrls: ['./user-detalles.component.css']
})
export class UserDetallesComponent implements OnInit {

  modificar: string;

  constructor() {
    this.modificar = 'Modificar';
   }

  ngOnInit() {
  }

  edit() {
    const input = document.getElementsByTagName('input');
    for (let i of input) {
      if (i.readOnly == true) {
        console.log(i);
        i.readOnly = false;
        this.modificar = 'Guardar';
      } else {
        i.readOnly = true;
        this.modificar = 'Modificar';
      }

    }
  }

}
