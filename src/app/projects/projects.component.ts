import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { title } from 'process';
interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
}
@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})

export class ProjectsComponent {
  projects: Project[] = [
    {
      title: "Portfolio Website",
      description: "A personal portfolio website built with Angular and Bootstrap.",
      image: "../assets/images/portfolio.png",
      link: ""
    },
    {
      title: "E-Library",
      description: "This web app is built using Java,jsp,jdbc,oracleand UI design",
      image: "assets/ecommerce.jpg",
      link: ""
    },
    {
      title:"Todo app",
      description:"This app was buit using angular",
      image:"",
      link:""
    }

  ];
}

