import { Component } from '@angular/core';
import { Portfolio } from '../../interfaces';
import { portfolio } from '../../portfolio';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent {
  project: Portfolio[] = portfolio;
}
