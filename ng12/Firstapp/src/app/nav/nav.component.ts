import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  constructor(public service: ServiceService) {}

  ngOnInit(): void {}
  logout() {
    this.service.loggedIn = false;
  }
}
