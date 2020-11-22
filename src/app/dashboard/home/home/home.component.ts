import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let myChart = new Chart('myChart', {
      type: 'line',
      data: {
        labels: ['12 JUN', '14 JUN', '16 JUN', '18 JUN', '20 JUN', '22 JUN'],
        datasets: [{
          data: [5, 10, 15, 25, 27, 30],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }

}
