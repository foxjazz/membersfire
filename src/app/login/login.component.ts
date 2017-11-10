import { Component, OnInit } from '@angular/core';
import {AuthService} from "../shared/auth.service";
import {AngularFireAuth} from "angularfire2/auth";
import {Router} from "@angular/router";

@Component({
  selector: 'mem-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  email: string;
  password: string;
  authService: AuthService;
  authorized: boolean;
  testuser: any;
  constructor(public auth: AuthService, private firebaseAuth: AngularFireAuth, private router: Router) {
    this.authService = auth; this.password="greeper"; this.email="fox21@foxjazz.net";
    this.authorized = false;
  }
  signup() {
    console.log("trying:");
    this.firebaseAuth.auth
      .createUserWithEmailAndPassword(this.email, this.password)
      .then(value => {
        console.log('Success!', value);
      })
      .catch(err => {
        console.log('Something went wrong:', err.message);
      });
  }
  login() {
    this.firebaseAuth
      .auth
      .signInWithEmailAndPassword(this.email, this.password)
      .then(value => {
        this.authorized = true;
        this.auth.user = this.username;
        this.router.navigate(['auth']);
        console.log('Nice, it worked!');
      })
      .catch(err => {
        this.authorized = false;
        console.log('Something went wrong:', err.message);
      });
  }
  logout() {
    this.firebaseAuth
      .auth
      .signOut();
  }
  ngOnInit() {
    this.auth.afAuth.authState.subscribe(
      (user) => this.testuser = user);
  }

}
