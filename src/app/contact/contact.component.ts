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
  from_name:string='';
  from_email:string='';
  message:string='';
  form = {
    from_name: '',
    from_email: '',
    message: ''
  };

  onSubmit(): void {
    const serviceID = 'service_f7vi5vn';
    const templateID = 'template_9y06vje';
    const publicKey = 'Af2_8j24WbRM2tllX'; 

    emailjs.send(serviceID, templateID, this.form, publicKey)
      .then((response: EmailJSResponseStatus) => {
        alert('Message sent successfully!');
        this.form = { from_name: '', from_email: '', message: '' }; 
      }, (error) => {
        console.error('Failed to send message:', error);
        alert('Failed to send the message. Please try again later.');
      });
  }
}
