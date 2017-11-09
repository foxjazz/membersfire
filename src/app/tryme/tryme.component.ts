import { Component, OnInit } from '@angular/core';
import * as firebase from "firebase";
import {ActivatedRoute, ParamMap, Route} from "@angular/router";

@Component({
  selector: 'mem-tryme',
  templateUrl: './tryme.component.html',
  styleUrls: ['./tryme.component.css']
})
export class TrymeComponent implements OnInit {

  db: any;
  email: string;

  constructor(private route: ActivatedRoute) { }

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
