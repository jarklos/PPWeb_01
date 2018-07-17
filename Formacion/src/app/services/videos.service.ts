import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class VideoService {
    videos: any = {};
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

}
