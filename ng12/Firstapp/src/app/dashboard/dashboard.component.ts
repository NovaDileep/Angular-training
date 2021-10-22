import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  users: any = [];
  filteredString: string = '';

  constructor(private title: Title, private auth: AuthService) {}

  ngOnInit(): void {
    this.title.setTitle('Dashboard');
    this.auth.getUsers().subscribe((data) => (this.users = data));
  }
  changeid(user: any) {
    this.auth.newid = user.id;
  }
}
