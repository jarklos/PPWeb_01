import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { _getComponentHostLElementNode } from '../../../node_modules/@angular/core/src/render3/instructions';

@Injectable()
export class VideoService {
    videos: any = {};
    user: any = {};
    rutaServer = 'http://localhost/PPWeb_01/PPWeb_01/Api/uploads/';

    constructor(public _http: HttpClient) {
    }

    peticionExterna() {
        this._http.get('http://localhost/PPWeb_01/PPWeb_01/Api/lista-de-videos.php')
        .subscribe((res: any[]) => {

           this.videos = res;
        },
      error => {
        console.log('Error');
      });
    }
    peticionLogin(uss, pss) {
      console.log('Traca');
      this._http.get('http://localhost/PPWeb_01/PPWeb_01/Api/login.php?uss=' + uss + '&pss=' + pss)
      .subscribe((res: any[]) => {
         this.user = res;
         console.log(this.user);
      },
    error => {
      console.log('Error');
    });
    }

}
