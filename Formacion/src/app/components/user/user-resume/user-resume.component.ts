import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-resume',
  templateUrl: './user-resume.component.html',
  styleUrls: ['./user-resume.component.css']
})
export class UserResumeComponent implements OnInit {

  nCompras: number;
  nProductos: number;
  today: number;

  constructor() {
    this.nCompras = 7;
    this.nProductos = 8;
    this.today = Date.now();
  }

  ngOnInit() {
  }

}
