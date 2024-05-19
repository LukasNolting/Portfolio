import { Component } from '@angular/core';
import { IntroComponent } from './intro/intro.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillsComponent } from './skills/skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    IntroComponent,
    AboutMeComponent,
    SkillsComponent,
    PortfolioComponent,
    ContactComponent
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
