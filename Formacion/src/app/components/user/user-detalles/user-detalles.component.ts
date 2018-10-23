import { Component, OnInit, Input } from '@angular/core';
import { StaticInjector } from '../../../../../node_modules/@angular/core/src/di/injector';
import { User } from 'src/app/models/user.model';
import { UsuariosService } from '../../../services/usuarios.service';

@Component({
  selector: 'app-user-detalles',
  templateUrl: './user-detalles.component.html',
  styleUrls: ['./user-detalles.component.css']
})
export class UserDetallesComponent implements OnInit {

  modificar: string;

  // @Input()
  usuarioActivo: User;

  constructor(private _userService: UsuariosService) {
    this.modificar = 'Modificar';
  }

  ngOnInit() {
    this.usuarioActivo = this._userService.getUserActual();
    console.log('se asigna al usuario actual: ', this.usuarioActivo);
  }

  edit() {
    const nodeList = document.getElementsByTagName('input'),
          input = [].slice.call(nodeList);
    for (const i of input) {
      if (i.readOnly === true) {
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
