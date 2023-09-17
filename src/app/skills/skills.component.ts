import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent {
  skills: Array<any> = [
    {
      name: 'Html',
      level: '80',
    },
    {
      name: 'CSS',
      level: '70',
    },
    {
      name: 'JS',
      level: '90',
    },
    {
      name: 'React',
      level: '85',
    },
    {
      name: 'Node',
      level: '80',
    },
    {
      name: 'Angular',
      level: '75',
    },
  ];
}
