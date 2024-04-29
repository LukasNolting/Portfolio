import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Skills } from '../../interfaces';
import { Skill } from '../../skills';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  skills: Skills[] = Skill;
}
