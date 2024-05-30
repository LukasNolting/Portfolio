import { Component } from '@angular/core';
import { Portfolio } from '../../interfaces';
import { portfolio } from '../../portfolio';
import { CommonModule } from '@angular/common';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, TranslateModule, HttpClientModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent {
  projects: Portfolio[] = portfolio;
  private languageChangeSubscription: Subscription | undefined;
  constructor(public translateService: TranslateService) {}

  ngOnInit(): void {
    this.translateProjectDescriptions();
    this.languageChangeSubscription =
      this.translateService.onLangChange.subscribe(() => {
        this.translateProjectDescriptions();
      });
  }

  ngOnDestroy(): void {
    if (this.languageChangeSubscription) {
      this.languageChangeSubscription.unsubscribe();
    }
  }
  translateProjectDescriptions(): void {
    this.projects.forEach((project) => {
      const translationKey = `portfolio.${project.description}`;
      this.translateService
        .get(translationKey)
        .subscribe((translatedDescription: string) => {
          project.translatedDescription = translatedDescription;
        });
    });
  }
}
