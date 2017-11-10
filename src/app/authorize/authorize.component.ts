import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {AuthService} from "../shared/auth.service";
import * as firebase from "firebase";
import {IUser} from "./IUser";
import {ActivatedRoute, ParamMap, Route} from "@angular/router";
import {isUndefined} from "util";

@Component({
  selector: 'mem-authorize',
  templateUrl: './authorize.component.html',
  styleUrls: ['./authorize.component.css']
})
export class AuthorizeComponent implements OnInit {
  db: any;
  user: IUser;
  email: string;

  constructor(private route: ActivatedRoute, private au: AuthService) { }

  public writeUserData( user: IUser) {
    firebase.database().ref('users/' + this.au.user).set(user);
  }
  public readUserData(){
    firebase.database().ref('/users/' + this.au.user).once('value').then(function(snapshot){
      this.user = (snapshot.val());
      if (isUndefined(this.user)) {
        this.user = {username: this.au.user, authorize: "basic"};
        this.writeUserData(this.user);
      }
      else {
        if (this.user.authorize !== "locked") {
            this.route('main');
        }
      }
    });
  }
  ngOnInit() {
    console.log("routed to auth");

    //this.email = this.route.snapshot.paramMap.get('email');
    this.readUserData();
  }

}
