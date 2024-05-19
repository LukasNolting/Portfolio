import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IntroComponent } from './content/intro/intro.component';
import { AboutMeComponent } from './content/about-me/about-me.component';
import { SkillsComponent } from './content/skills/skills.component';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { PortfolioComponent } from './content/portfolio/portfolio.component';
import { ContactComponent } from './content/contact/contact.component';
import { FooterComponent } from './shared/footer/footer.component';
import AOS from 'aos';
import { Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ImprintComponent } from './imprint/imprint.component';

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
    ImprintComponent
  ],
})
export class AppComponent implements OnInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      AOS.init();
    }
  }
  title = 'Portfolio';
}
