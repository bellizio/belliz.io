import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor() {}

  scrollToSection(section: string) {
    const el = document.getElementById(section);

    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
