import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  private url = 'https://jsonplaceholder.typicode.com/users';
  private login: boolean = false;
  private id: number = 2;
  getUsers() {
    return this.http.get(this.url);
  }
  getUser() {
    return this.http.get(this.url + '/' + this.id);
  }

  get loggedIn() {
    return this.login;
  }
  set loggedIn(value: boolean) {
    this.login = value;
    console.log(this.login);
  }

  set newid(changedId: number) {
    this.id = changedId;
  }
}
