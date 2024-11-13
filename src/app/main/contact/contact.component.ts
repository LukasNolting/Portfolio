import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule, TranslateModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  sendmail = false;
  constructor(
    private router: Router,
    public translateService: TranslateService
  ) {}
  http = inject(HttpClient);

  contactData = {
    name: '',
    email: '',
    message: '',
    privacy: false,
  };

  post = {
    endPoint: 'https://lukas-nolting.eu/sendMail.php',
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
      this.http
        .post(this.post.endPoint, this.post.body(payload), this.post.options)
        .subscribe({
          next: (response) => {
            ngForm.resetForm();
          },
          complete: () => {
            this.sendmail = true;
            setTimeout(() => {
              this.sendmail = false;
            }, 5000);
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
