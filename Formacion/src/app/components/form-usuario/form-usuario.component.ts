import { Component, OnInit } from '@angular/core';

import { User } from './../../models/user.model';

import { UsuariosService } from './../../services/usuarios.service';
import { PaisesService } from './../../services/paises.service';


@Component({
  selector: 'app-form-usuario',
  templateUrl: './form-usuario.component.html',
  styleUrls: ['./form-usuario.component.css']
})
export class FormUsuarioComponent implements OnInit {

  submitted = false;
  usuario: any;
  paises: any;

  pais: string;

  constructor( public _paises: PaisesService, public _usuarios: UsuariosService, public user: User ) { }

  ngOnInit() {
    this._paises.getPaises().subscribe(
      (resp: any) => {
        console.log(resp);
        this.paises = resp;
      });

 /*   this._usuarios.postUsuario(this.user)
    .subscribe(usuario => this._usuarios.data.push(usuario));  // Habría que hacer un push, pero no tengo claro a dónde
*/
  }

  onSubmit() { this.submitted = true; }

  // TODO: Remove this when we're done
 get diagnostic() { return JSON.stringify(this.user); }

}
