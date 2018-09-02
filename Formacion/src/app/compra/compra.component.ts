import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css']
})
export class CompraComponent implements OnInit {
  Estado = 0;
  public CambiarEstado() {
    this.Estado += 1;
    if (this.Estado > 2) {
      this.Estado = 0;
    }

  }
  constructor() { }

  ngOnInit() {
  }

}
