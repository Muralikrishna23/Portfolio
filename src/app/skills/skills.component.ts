import { CommonModule } from '@angular/common';
import { Component ,NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {  faHtml5, faCss3, faJs, faAngular, faJava, faGitAlt } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [FontAwesomeModule,CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  skills = [
    { name: 'Java', icon: faJava },
    { name: 'SQL', icon: faDatabase },
    { name: 'HTML', icon: faHtml5 },
    { name: 'CSS', icon: faCss3 },
    { name: 'JavaScript', icon: faJs },
    { name: 'Angular', icon: faAngular },
    { name: 'Git', icon: faGitAlt }
  ];
}
