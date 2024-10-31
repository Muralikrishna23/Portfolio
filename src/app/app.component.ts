import { Component } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from "./about/about.component";
import { FooterComponent } from './footer/footer.component';


@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterOutlet, NavbarComponent, ContactComponent, AboutComponent,RouterOutlet,RouterLink,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})

export class AppComponent {
  title = 'portfolio';
}
