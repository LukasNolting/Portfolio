import { Routes } from '@angular/router';
import { ImprintComponent } from './imprint/imprint.component';
import { IntroComponent } from './main/intro/intro.component';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';

export const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  {
    path: 'imprint',
    component: ImprintComponent,
  },
];
