import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IntroComponent } from './content/intro/intro.component';
import { AboutMeComponent } from "./content/about-me/about-me.component";
import { SkillsComponent } from "./content/skills/skills.component";
import { NavigationComponent } from "./navigation/navigation.component";
import { PortfolioComponent } from './content/portfolio/portfolio.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, IntroComponent, AboutMeComponent, SkillsComponent, NavigationComponent, PortfolioComponent]
})
export class AppComponent {
  title = 'Portfolio';
}
