import { Component, OnInit } from '@angular/core';
import { $ } from '../../../../../node_modules/protractor';

@Component({
  selector: 'app-user-news',
  templateUrl: './user-news.component.html',
  styleUrls: ['./user-news.component.css']
})
export class UserNewsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  edit () {
   // $('.mail').toggleClass('hidden');
   // $('.inputMail').toggleClass('hidden');
   // $('.change').toggleClass('hidden');
   // $('.save').toggleClass('hidden');
  }

}
