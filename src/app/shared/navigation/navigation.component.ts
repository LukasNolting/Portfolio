import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
})
export class NavigationComponent {
  isImprintPage: boolean = false;
  langEn: boolean = true;
  langDe: boolean = false;

  constructor(
    private router: Router,
    public translateService: TranslateService
  ) {
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
  navigateToHome() {
    this.router.navigateByUrl('/').then(() => {
      window.scrollTo(0, 0);
    });
  }

  changeLanguage(langCode: string) {
    this.translateService.use(langCode);
    if (langCode === 'de') {
      this.langDe = true;
      this.langEn = false;
    } else if (langCode === 'en') {
      this.langDe = false;
      this.langEn = true;
    }
  }
}
