import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-lista-de-videos',
  templateUrl: './lista-de-videos.component.html',
  styleUrls: ['./lista-de-videos.component.css']
})
export class ListaDeVideosComponent implements OnInit {

  constructor(private ruta: HttpClient) {

   }

  ngOnInit() {
   this.peticionExterna();
  }
  peticionExterna(): void {
    this.ruta.get('localhost/PPWeb_01/Api/info-video.php')
    .subscribe((res: Response) => {
      console.log(res.json());
    });
  }

}
