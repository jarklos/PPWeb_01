import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PaisesService {

  paises: any = {};

  constructor( public _http: HttpClient ) {}

  getPaises() {
    return this._http.get('https://restcountries.eu/rest/v2/');
  }

}
