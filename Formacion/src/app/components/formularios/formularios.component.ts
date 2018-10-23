import { Component, OnInit } from '@angular/core';
import { VideoService } from './../../services/videos.service';
import { UsuariosService } from './../../services/usuarios.service';
import { DOCUMENT } from '@angular/common';
import { Inject } from '@angular/core';
import { User, Credenciales } from './../../models/user.model';

@Component({
  selector: 'app-formularios',
  templateUrl: './formularios.component.html',
  styleUrls: ['./formularios.component.css']
})
export class FormulariosComponent implements OnInit {

  users: any[];
  rutaServer: string;
  user: string;
  pass: string;

  constructor(private _videos: VideoService, private _usuarios: UsuariosService, @Inject(DOCUMENT) document) {
  }

  ngOnInit() {

  }

  llamar(mail: string, contras: string) {
    console.log('funcion llamar');
    console.log('Usuario =' + mail + ' Contraseña =' + contras);
    // this._videos.peticionLogin(this.user, this.pass);
    const usuario: Credenciales = { mail: mail, password: contras };
    this._usuarios.loginUsuario(usuario)
    .subscribe(datos => {
      console.log('datos devueltos por el servidor', datos);
      if (datos) {
        console.log('se envian los datos (usuario) devuelto por el servidor al servicio setuseractual');
        this._usuarios.setUserActual(datos);
      }
    });
  }

  onSubmit() {
    console.log('funcion onSubmit');
//     const yo: User = {
//       nombre: 'joder',
//       apellidos: 'mismo',
//       password: 'este',
//       password2: '',
//       pais: 'España',
//       provincia: 'Castellón',
//       domicilio: 'este',
//       mail: 'joder',
//       cPostal: 0,
//       tel: 0};
//     this._usuarios.postUsuario(yo)
//     .subscribe(datos => {
//       console.log('datos devueltos por el servidor', datos);
//     });
  }
}
