import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

  document.addEventListener('DOMContentLoaded', () => {
    document
      .querySelectorAll<HTMLAnchorElement>('a[href^="#"]')
      .forEach((anchor) => {
        anchor.addEventListener('click', (e) => {
          e.preventDefault();

          const targetId = anchor.getAttribute('href')!.substring(1);
          const targetElement = document.getElementById(targetId);

          if (targetElement) {
            const targetPosition =
              targetElement.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = targetPosition - 20; // 100px weiter oben

            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth',
            });
          }
        });
      });
  });
