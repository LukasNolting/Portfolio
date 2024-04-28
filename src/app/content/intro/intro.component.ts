import { Component, HostListener } from '@angular/core';
import { NavigationComponent } from '../../navigation/navigation.component';
import { CommonModule } from '@angular/common';
import { AboutMeComponent } from '../about-me/about-me.component';


@Component({
  selector: 'app-intro',
  standalone: true,
  imports: [NavigationComponent, CommonModule, AboutMeComponent],
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.scss',
  
})
export class IntroComponent {

  constructor() {}

}
