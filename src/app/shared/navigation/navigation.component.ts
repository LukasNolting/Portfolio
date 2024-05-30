import { CommonModule } from '@angular/common';
import { Component, Injectable } from '@angular/core';
import { Router, NavigationEnd, RouterLink } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule, TranslateModule, RouterLink],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
})
@Injectable({
  providedIn: 'root',
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

  navigateTo(target: string, offset: number = 0) {
    const currentUrl = this.router.url;
    if (currentUrl === '/' || currentUrl.startsWith('/#')) {
      this.scrollToSection(target, offset);
    } else {
      this.router.navigate(['/']).then(() => {
        setTimeout(() => {
          this.scrollToSection(target, offset);
        }, 100);
      });
    }
  }

  private scrollToSection(elementId: string, offset: number) {
    const element = document.getElementById(elementId);
    if (element) {
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
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
