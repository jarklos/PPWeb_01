import { Component, OnInit } from '@angular/core';
import {VideoService} from '../../services/videos.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {
  videos: any[] = [];
  public imagePath: string;
  constructor(private _videos: VideoService, private http: HttpClient) {
    this.http.get('http://localhost/PPWeb_01/PPWeb_01/Api/lista-de-videos.php')
    .subscribe((res: any[]) => {
      this.videos = res;
      console.log(this.videos);
    });
  }

  ngOnInit() {

  }

}
