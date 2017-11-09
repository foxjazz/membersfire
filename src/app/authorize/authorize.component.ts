import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import * as firebase from "firebase";
import {IUser} from "./IUser";
import {ActivatedRoute, ParamMap, Route} from "@angular/router";

@Component({
  selector: 'mem-authorize',
  templateUrl: './authorize.component.html',
  styleUrls: ['./authorize.component.css']
})
export class AuthorizeComponent implements OnInit {
  db: any;
  user: IUser;
  email: string;
  constructor(private route: ActivatedRoute) { }

  public writeUserData(email: string, user: IUser) {
    this.db.ref('users/email').set(user);
  }
  public readUserData(email: string){
    this.db.ref('/users/' + email).once('value').then(function(snapshot){
      this.user = (snapshot.val());
    });
  }
  ngOnInit() {
    console.log("routed to auth");
    this.db = firebase.database();
    this.email = this.route.snapshot.paramMap.get('email');
    this.readUserData(this.email);
  }

}
