import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AuthService } from '../auth.service';

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
    private title: Title,
    private auth: AuthService
  ) {}

  ngOnInit(): void {
    this.title.setTitle('Dashboard');

    this.auth.getUsers().subscribe((data) => (this.users = data));
  }
  changeid(user: any) {
    this.auth.newid = user.id;
  }
}
