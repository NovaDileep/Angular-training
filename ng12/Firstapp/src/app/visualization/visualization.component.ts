import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ChartDataset, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-visualization',
  templateUrl: './visualization.component.html',
  styleUrls: ['./visualization.component.css'],
})
export class VisualizationComponent implements OnInit {
  active = 1.25;
  cured = 97.32;
  deaths = 1.43;
  janInit = 10;
  febInit = 30;
  marInit = 20;
  public data: ChartDataset[] = [
    { data: [this.active, this.cured, this.deaths] },
  ];
  public labels: string[] = ['Active', 'Cured', 'Deaths'];

  public rainData: ChartDataset[] = [
    { data: [this.janInit, this.febInit, this.marInit], label: 'Rainfall' }
  ];

  public rainLabels: string[] = ['Jan', 'Feb', 'Mar'];

  jan = [];
  feb = [];
  mar = [];
  constructor(private title: Title) {}

  ngOnInit(): void {
    this.title.setTitle('Pie chart & Line chart');
  }

  changeValue(Jan: any, Feb: any, Mar: any) {
    this.rainData = [{ data: [Jan, Feb, Mar], label: 'Rainfall' }];
  }
}
