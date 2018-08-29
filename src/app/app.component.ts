import { Component, AfterViewInit } from '@angular/core';
import { Location } from '@angular/common';
import * as gumshoe from 'gumshoejs';
declare var gumshoe: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  public path: string;

  constructor(private location: Location) {
    this.path = this.location.path();
  }

  ngAfterViewInit(): void {
    gumshoe.init();
  }
}
