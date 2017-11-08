import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import * as firebase from "firebase";
import {IUser} from "./IUser";

@Component({
  selector: 'mem-authorize',
  templateUrl: './authorize.component.html',
  styleUrls: ['./authorize.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AuthorizeComponent implements OnInit {
  db: any;
  constructor() { }

  public writeUserData(email: string, user: IUser) {
    this.db.ref('users/email').set(user);
  }
  ngOnInit() {
    this.db = firebase.database();
  }

}
