import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact-us.html',
  styleUrls: ['./contact-us.scss']
})
export class ContactUsComponent {

  sendEmail(event: Event) {
    event.preventDefault();
    console.log('✅ Email function triggered');

    emailjs.sendForm(
      'service_m57i165',         // ✅ Your correct service ID
      'template_bhajn4m',        // ✅ Your existing template ID
      event.target as HTMLFormElement,
      'Pq2DWOUwEPBnVdMDf'        // ✅ Your public key (starts with P)
    ).then(
      () => {
        alert('✅ Message sent to admin email successfully!');
        (event.target as HTMLFormElement).reset();
      },
      (error: any) => {
        console.error('❌ EmailJS error:', error);
        alert(`❌ Failed to send email. Reason: ${error.text || 'Unknown error'}`);
      }
    );
  }
}
