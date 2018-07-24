import { Component, OnInit } from '@angular/core';
import {VideoService} from '../../services/videos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {

  videos;

  constructor(private _videos: VideoService) {

  }


  ngOnInit() {
    this._videos.peticionExterna().subscribe((videos) => {
      this.videos = videos;
    });
    console.log(this.videos);
  }

}
