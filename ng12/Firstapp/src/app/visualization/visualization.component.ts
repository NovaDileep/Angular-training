import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ChartDataset, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-visualization',
  templateUrl: './visualization.component.html',
  styleUrls: ['./visualization.component.css'],
})
export class VisualizationComponent implements OnInit {
  public data: ChartDataset[] = [{ data: [1.25, 97.32, 1.43] }];
  public labels: string[] = ['Active', 'Cured', 'Deaths'];

  /*
 public raindata: ChartDataset[]=[
  {data:[10,30,50,100,220,900,1500,1300,500,420,150,10], label:'Rainfall'}
  
];
*/

  public raindata: ChartDataset[] = [{ data: [10, 30, 20], label: 'Rainfall' }];

  public rainlabels: string[] = ['Jan', 'Feb', 'Mar'];

  jan = [];
  feb = [];
  mar = [];
  constructor(private title: Title) {}

  ngOnInit(): void {
    this.title.setTitle('Pie chart & Line chart');
  }

  changeValue(Jan: any, Feb: any, Mar: any) {
    this.raindata = [{ data: [Jan, Feb, Mar], label: 'Rainfall' }];
  }
}
