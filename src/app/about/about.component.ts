import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  name: string = "Muralikrishna Jakkamsetti";
  title: string = "Java Developer";
  description: string = "I am a passionate developer with experience in Java, SQL, Servlets, JSP, Data Structures and Algorithms, HTML, CSS, and Angular. I love solving complex problems and building robust applications.";
  skills: string[] = ["Java", "SQL", "Angular", "HTML", "CSS", "JavaScript", "Git"];
}
