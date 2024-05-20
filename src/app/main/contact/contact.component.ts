import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  constructor(private router: Router) {}
  http = inject(HttpClient);

  contactData = {
    name: '',
    email: '',
    message: '',
    privacy: false,
  };

  post = {
    endPoint: 'https://lukas-nolting.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  async onSubmit(ngForm: NgForm) {
    if (ngForm.form.valid) {
      let payload = {
        email: this.contactData.email,
        message: this.contactData.message,
        name: this.contactData.name,
        privacy: this.contactData.privacy,
      };
      console.log(payload);

      this.http
        .post(this.post.endPoint, this.post.body(payload), this.post.options)
        .subscribe({
          next: (response) => {
            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => {
            console.info('send post complete');
            setTimeout(() => {
              console.log('complete');
            }, 1000);
          },
        });
    }
    ngForm.resetForm();
  }

  navigateToPrivacy() {
    this.router.navigateByUrl('/privacy').then(() => {
      window.scrollTo(0, 0);
    });
  }
}
