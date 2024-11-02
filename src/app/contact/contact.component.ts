import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import emailjs,{ EmailJSResponseStatus } from '@emailjs/browser';
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  
  public  sendEmail(e: Event) {
    e.preventDefault();

    emailjs
      .sendForm('service_f7vi5vn', 'template_accqmim', e.target as HTMLFormElement, {
        publicKey: 'Af2_8j24WbRM2tllX',
      })
      .then(
        () => {
          alert('Message sent successfully!');
        },
        (error) => {
          console.log('FAILED...', (error as EmailJSResponseStatus).text);
          alert('Failed to send the message. Please try again later.');
        },
      );
  }
}
