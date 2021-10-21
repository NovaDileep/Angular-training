import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ServiceService } from '../service.service';
import { Title } from '@angular/platform-browser';

/*interface JSON{
  userId:string;
  id:string;
  title:string;
  completed:boolean;
}
*/

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',

  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  users: any = [];
  filteredString: string = '';

  constructor(
    private http: HttpClient,
    public service: ServiceService,
    private title: Title
  ) {}

  ngOnInit(): void {
    this.title.setTitle('Dashboard');
    this.http
      .get('https://jsonplaceholder.typicode.com/users')
      .subscribe((data) => (this.users = data));
  }
  changeid(user: any) {
    this.service.id = user.id;
  }
}
