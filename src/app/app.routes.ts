import { Routes } from '@angular/router';
import { ImprintComponent } from './imprint/imprint.component';
import { IntroComponent } from './main/intro/intro.component';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { PrivacyComponent } from './privacy/privacy.component';

export const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  {
    path: 'imprint',
    component: ImprintComponent,
  },
  {
    path: 'privacy',
    component: PrivacyComponent,
  },
];
