import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Title } from '@angular/platform-browser';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  user: any = [];

  constructor(
    private http: HttpClient,
    private title: Title,
    private auth: AuthService
  ) {}

  ngOnInit(): void {
    this.title.setTitle('Details');
    this.auth.getUser().subscribe((data) => (this.user = data));
  }
}
