import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent implements OnInit {

  @ViewChild('doughnutChart1Ref', { static: true }) doughnutChartRef1;
  @ViewChild('doughnutChart2Ref', { static: true }) doughnutChartRef2;
  @ViewChild('doughnutChart3Ref', { static: true }) doughnutChartRef3;

  doughnutChart1: any;
  doughnutChart2: any;
  doughnutChart3: any;

  isGathering: boolean;

  constructor() {}

  ngOnInit() {
    this.isGathering = true;

    setTimeout(() => {
      this.doughnutChart1 = !this.doughnutChart1 ? this.getDoughnutChart(this.doughnutChartRef1) : null;
      this.doughnutChart2 = !this.doughnutChart2 ? this.getDoughnutChart(this.doughnutChartRef2) : null;
      this.doughnutChart3 = !this.doughnutChart3 ? this.getDoughnutChart(this.doughnutChartRef3) : null;

      this.isGathering = false;
    }, 5000);
  }

  getDoughnutChart(context: any) {
    return new Chart(context.nativeElement, {
      type: 'doughnut',
      data: {
        labels: [],
        datasets: [{
          label: 'My First Dataset',
          data: [30, 50, 20],
          backgroundColor: []
        }]
      }
    });
  }

}
