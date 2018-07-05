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
      if (section === 'intro') {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      } else {
        el.scrollIntoView({
          behavior: 'smooth',
          block: 'end',
          inline: 'nearest'
        });
      }
    }
  }
}
