import {Component, OnInit} from '@angular/core';
import { AuthService } from './shared/auth.service';
import {Router} from "@angular/router";

@Component({
  selector: 'mem-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'mem';
  user = null;
  email: string;
  password: string;
  authService: AuthService;
  authorized: boolean;
  constructor(
    public auth: AuthService, private router: Router) {
    this.authService = auth;
    this.password = "greeper";
    this.email = "fox21@foxjazz.net";
    this.authorized = false;
  }

  loginWithGoogle() {
    this.auth.loginWithGoogle();
  }
  ngOnInit() {


  }


}
