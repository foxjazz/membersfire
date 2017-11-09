import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'mem-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private route: Router) { }

  public doroute(){
    this.route.navigate(['tryme']);
  }
  ngOnInit() {
  }

}
