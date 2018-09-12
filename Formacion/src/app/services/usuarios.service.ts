import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Observable, throwError } from 'rxjs';
// import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  usuariosUrl: string;
  data: string;

  constructor( private _http: HttpClient ) { }

/*
  // POST
  postUsuario( _usuario: Usuario ): Observable<Usuario> {
    return this._http.post<Usuario>( this.usuariosUrl, _usuario )  // despues de _usuario irían los headers
      .pipe(
    //    catchError(this.handleError('postUsuario', _usuario))
      );
  }

  // DELETE
  deleteUsuaio (id: number): Observable<{}> {
    const url = `${this.usuariosUrl}/${id}`; // DELETE api/usuarios/42
    return this._http.delete(url)
      .pipe(
      //  catchError(this.handleError('deleteHero'))
      );
  }
*/
}
