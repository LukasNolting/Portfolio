import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Skills } from '../../interfaces';
import { Skill } from '../../skills';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  skills: Skills[] = Skill;
  constructor(public translateService: TranslateService) {}
}
