import { Component, OnInit } from '@angular/core';
import { VideoService } from './../../services/videos.service';
import { DOCUMENT } from '@angular/common';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-registro-v',
  templateUrl: './registro-v.component.html',
  styleUrls: ['./registro-v.component.css']
})
export class RegistroVComponent implements OnInit {
  users: any[];
  rutaServer: string;
  uss: string;
  pss: string;

  constructor(private _videos: VideoService, @Inject(DOCUMENT) document) { }

  ngOnInit() {
  }

}
