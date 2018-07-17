import { Component, OnInit } from '@angular/core';
import { VideoService } from './../../services/videos.service';


@Component({
  selector: 'app-lista-de-videos',
  templateUrl: './lista-de-videos.component.html',
  styleUrls: ['./lista-de-videos.component.css'],

})
export class ListaDeVideosComponent implements OnInit {

 //  private resultado: Observable<Object>;

  videos: any[];
  rutaServer: string;

  constructor(private _videos: VideoService) {}


  ngOnInit() {
  }


}
