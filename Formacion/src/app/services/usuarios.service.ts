import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { User, Credenciales } from '../models/user.model';


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  // urlServidor = 'http://localhost:8080';
  // urlServidor = 'http://192.168.1.3:8080';
  urlServidor = 'http://84.121.249.166:8080';
  usuariosUrl = `${this.urlServidor}/api/usuarios`;
  urlServidorAdmin = `${this.urlServidor}/api/adminusuarios`;
  data: string;
  credencialActual: Credenciales = {mail: '', password: ''};
  usuarioActual: User = {
    nombre: null,
    apellidos: null,
    cPostal: null,
    domicilio: null,
    mail: null,
    pais: null,
    password: null,
    password2: null,
    provincia: null,
    tel: null
  };

  constructor( private _http: HttpClient ) { }


  // POST para enviar los datos de registro (y/o actualizarlos?)
  postUsuario( _usuario: User ): Observable<User> {

    return this._http.post<User>( this.usuariosUrl, _usuario )  // despues de _usuario irían los headers
      .pipe(
        catchError(this.handleError('postUsuario', _usuario))
      );
  }

  conseguirDatosDeUsuario(): Observable<User> {
    return this._http.post<User>(this.usuariosUrl, this.credencialActual);
  }

  // DELETE
  deleteUsuario (id: number): Observable<{}> {
    const url = `${this.usuariosUrl}/${id}`; // DELETE api/usuarios/42
    return this._http.delete(url)
      .pipe(
        catchError(this.handleError('deleteHero'))
      );
  }

  borrarUsuarioporMail (mail: string): Observable<User> {
    return this._http.post<User>(this.urlServidorAdmin, {mail: mail});
  }

  loginUsuario (usuario: Credenciales): Observable<User> {
    console.log('llegamos a loginUsuario del usuarios.service');
    return this._http.post<User>( `${this.usuariosUrl}/login`, usuario );
    // return this._http.post<User>( 'http://192.168.1.3:8080/api/usuarios/login', usuario );
/*     .pipe(
      catchError(this.handleError('login'))
    ); */
  }

  setUserActual(user: User) {
    this.usuarioActual = user;
  }

  getUserActual(): User {
    console.log('getUserActual en usuarios.service');
    return this.usuarioActual;
  }

  handleError(error: string, _usu?: User): any {
    console.log('controlando los errores');
  }

}
