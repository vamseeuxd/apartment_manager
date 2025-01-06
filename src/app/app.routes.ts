import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  /* { path: 'apartments', loadComponent: () => import('./pages/manage/apartments/apartments.component').then( (c) => c.ApartmentsComponent ), },
  { path: 'blocks/:apartmentId', loadComponent: () => import('./pages/manage/blocks/blocks.component').then( (c) => c.BlocksComponent ), },
  { path: 'floors/:apartmentId/:blockId', loadComponent: () => import('./pages/manage/floors/floors.component').then( (c) => c.FloorsComponent ), },
  { path: 'flats/:apartmentId/:blockId/:floorId', loadComponent: () => import('./pages/manage/flats/flats.component').then( (c) => c.FlatsComponent ), },
  { path: 'flat-details/:apartmentId/:blockId/:floorId/:flatId', loadComponent: () => import('./pages/manage/flat-details/flat-details.component').then( (c) => c.FlatDetailsComponent ), }, */
  { path: 'members', loadComponent: () => import('./pages/members/members.component').then( (c) => c.MembersComponent ), },
  { path: 'dashboard', loadComponent: () => import('./pages/dashboard/dashboard.component').then( (c) => c.DashboardComponent ), },
  { path: 'user', loadComponent: () => import('./pages/user/user.component').then( (c) => c.UserComponent ), },
  { path: 'favorite', loadComponent: () => import('./pages/favorite/favorite.component').then( (c) => c.FavoriteComponent ), },
  { path: 'settings', loadComponent: () => import('./pages/settings/settings.component').then( (c) => c.SettingsComponent ), },
  {
    path: 'manage',
    loadComponent: () =>
      import('./pages/manage/manage.component').then((c) => c.ManageComponent),
    children: [
      { path: '', redirectTo: '/manage/apartments', pathMatch: 'full' },
      { path: 'apartments', loadComponent: () => import('./pages/manage/apartments/apartments.component').then( (c) => c.ApartmentsComponent ), },
      { path: 'blocks/:apartmentId', loadComponent: () => import('./pages/manage/blocks/blocks.component').then( (c) => c.BlocksComponent ), },
      { path: 'floors/:apartmentId/:blockId', loadComponent: () => import('./pages/manage/floors/floors.component').then( (c) => c.FloorsComponent ), },
      { path: 'flats/:apartmentId/:blockId/:floorId', loadComponent: () => import('./pages/manage/flats/flats.component').then( (c) => c.FlatsComponent ), },
      { path: 'flat-details/:apartmentId/:blockId/:floorId/:flatId', loadComponent: () => import('./pages/manage/flat-details/flat-details.component').then( (c) => c.FlatDetailsComponent ), },
    ],
  },
];
