import {Component, OnInit} from '@angular/core';
import { AuthService } from './shared/auth.service';

@Component({
  selector: 'mem-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'mem';
  user = null;
  constructor(
    private auth: AuthService) { }

  loginWithGoogle() {
    this.auth.loginWithGoogle();
  }
  ngOnInit() {
    this.auth.getAuthState().subscribe(
      (user) => this.user = user);
  }


}
