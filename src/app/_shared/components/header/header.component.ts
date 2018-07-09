import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor() {}

  scrollToSection($event: Event, section: string) {
    const el = document.getElementById(section);

    $event.preventDefault();
    $event.stopPropagation();

    if (el) {
      el.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
        inline: 'nearest'
      });
    }
  }
}
