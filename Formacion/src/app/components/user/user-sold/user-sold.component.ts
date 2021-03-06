import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-sold',
  templateUrl: './user-sold.component.html',
  styleUrls: ['./user-sold.component.css']
})
export class UserSoldComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

   // lineChart
   public lineChartData: Array<any> = [
    {data: [65, 59, 80, 81, 56, 55], label: 'Series A'}
  ];
  public lineChartLabels: Array<any> = ['', '', '', '', '', ''];
  public lineChartOptions:any = {
    responsive: true
  };
  public lineChartColors: Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend: boolean = false  ;
  public lineChartType: string = 'line';

  public randomize(): void {
    let _lineChartData: Array<any> = new Array(this.lineChartData.length);
    for (let i = 0; i < this.lineChartData.length; i++) {
      _lineChartData[i] = { data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label };
      for (let j = 0; j < this.lineChartData[i].data.length; j++) {
        _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
      }
    }
    this.lineChartData = _lineChartData;
  }

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

}
