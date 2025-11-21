import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'Kanpo',
    loadComponent: () => import('./pages/kanpo/kanpo').then((m) => m.Kanpo),
  },
];
