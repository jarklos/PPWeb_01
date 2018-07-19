import { Component, OnInit } from '@angular/core';
import { VideoService } from './../../services/videos.service';
import { DOCUMENT } from '@angular/common';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-formularios',
  templateUrl: './formularios.component.html',
  styleUrls: ['./formularios.component.css']
})
export class FormulariosComponent implements OnInit {

  users: any[];
  rutaServer: string;
  uss: string;
  pss: string;

  constructor(private _videos: VideoService, @Inject(DOCUMENT) document) {
  }

  ngOnInit() {

  }

  llamar() {
    /*this.uss =  document.getElementById('uss');
    this.pss =  document.getElementById('pss');*/
    console.log('Usuario =' + 'nombre' + ' Contraseña =' + 'pass');
     this._videos.peticionLogin(this.uss, this.pss);
  }

}
