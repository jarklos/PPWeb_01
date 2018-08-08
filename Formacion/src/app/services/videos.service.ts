import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class VideoService {
    videos: any = {};
    user: any = {};
    rutaServer = 'http://localhost/PPWeb_01/PPWeb_01/Api/uploads/';

    constructor(public _http: HttpClient) {
    }

    peticionExterna() {
      return this._http.get('http://localhost/PPWeb_01/Api/lista-de-videos.php');
       // console.log(this.videos);
       // console.log('BBDD');

    }

    peticionLogin(uss, pss) {
      console.log('Traca');
      const users = this._http.get('http://localhost/PPWeb_01/Api/login.php?uss=' + uss + '&pss=' + pss)
      .subscribe((res: any[]) => {
         this.user = res;
         console.log(this.user);
         return users;
      },
      error => {
        console.log('Error');
      });
    }

}
