import { Component, NgModule, OnInit,ElementRef,ViewChild} from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgxTypedJsModule } from 'ngx-typed-js';
import Typed from 'typed.js';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgxTypedJsModule,CommonModule,RouterLink,RouterModule,RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent implements OnInit{
  @ViewChild('typedElement', { static: true }) typedElement!: ElementRef;

  ngOnInit(): void {
    const options = {
      strings: ['Java Developer', 'FullStackDeveloper', 'Problem solver'],
      typeSpeed: 50,
      backSpeed: 25,
      loop: true,
    };

    
    new Typed(this.typedElement.nativeElement, options);
  }
}
