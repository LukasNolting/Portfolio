import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IntroComponent } from './main/intro/intro.component';
import { AboutMeComponent } from './main/about-me/about-me.component';
import { SkillsComponent } from './main/skills/skills.component';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { PortfolioComponent } from './main/portfolio/portfolio.component';
import { ContactComponent } from './main/contact/contact.component';
import { FooterComponent } from './shared/footer/footer.component';
import AOS from 'aos';
import { TranslateService } from '@ngx-translate/core';
import { Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ImprintComponent } from './imprint/imprint.component';
import { Router, RouterLink } from '@angular/router';
import { BackgroundComponent } from './shared/background/background.component';



@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'], // Corrected import statement
  imports: [
    RouterOutlet,
    IntroComponent,
    AboutMeComponent,
    SkillsComponent,
    NavigationComponent,
    PortfolioComponent,
    ContactComponent,
    FooterComponent,
    ImprintComponent,
    RouterLink,
    BackgroundComponent,
  ],
})
export class AppComponent implements OnInit {
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private router: Router,
    translate: TranslateService
  ) {
    translate.setDefaultLang('en');
    translate.use('en');
  }
  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      AOS.init();
    }
  }
  title = 'Portfolio';
}
