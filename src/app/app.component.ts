import { Component, AfterViewInit } from '@angular/core';
import { Location } from '@angular/common';
import 'smooth-scroll';
import * as gumshoe from 'gumshoejs';
declare var SmoothScroll: any;
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
    var scroll = new SmoothScroll('a[href*="#"]', {
      header: '[data-scroll-header]',
      updateURL: false
    });
    gumshoe.init();
  }
}
