import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response } from '@angular/http';



@Component({
  selector: 'app-lista-de-videos',
  templateUrl: './lista-de-videos.component.html',
  styleUrls: ['./lista-de-videos.component.css']
})
export class ListaDeVideosComponent implements OnInit {

 //  private resultado: Observable<Object>;

  videos: Array<Object>;
  rutaServer: string;
  constructor(private ruta: HttpClient) {

   }

  ngOnInit() {
    this.rutaServer = 'http://localhost/PPWeb_01/PPWeb_01/Api/uploads';
    this.videos = [];
   this.peticionExterna();
  }
  peticionExterna(): void {
    this.ruta.get('http://localhost/PPWeb_01/PPWeb_01/Api/lista-de-videos.php')
    .subscribe((res: Array<object>) => {

       this.videos = res;
       console.log(this.videos);
    },
  error => {
    console.log('Error');
  });
      }

}
