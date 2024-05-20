import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
})
export class NavigationComponent {

  isImprintPage: boolean = false;
  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isImprintPage = event.url === '/imprint';
      }
    });
  }

  status: boolean = false;
  clickEvent() {
    this.status = !this.status;
  }
  clickEventLogo() {
    this.status = false;
  }
  navigateToPrivacy() {
    this.router.navigateByUrl('/privacy').then(() => {
      window.scrollTo(0, 0);
    });
  }
  navigateToImprint() {
    this.router.navigateByUrl('/imprint').then(() => {
      window.scrollTo(0, 0);
    });
  }
}
