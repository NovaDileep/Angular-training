import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private title: Title,
    private auth: AuthService
  ) {}

  ngOnInit(): void {
    this.title.setTitle('Register');
  }
  signupform = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });
  validateSignup() {
    if (this.signupform.invalid) {
      return;
    }
    this.auth.loggedIn = true;
    this.router.navigate(['dashboard']);
  }
}
