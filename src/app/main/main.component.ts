import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../shared/auth.service";

@Component({
  selector: 'mem-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(public auth: AuthService, private route: Router) { }

  public doroute(){
    this.route.navigate(['tryme']);
  }
  ngOnInit() {
  }

}
