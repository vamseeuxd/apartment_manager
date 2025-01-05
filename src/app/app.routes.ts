import { Routes } from '@angular/router';

export const routes: Routes = [
  {path:'', redirectTo: '/apartments', pathMatch: 'full'},
  {path:'apartments', loadComponent: () => import('./pages/apartments/apartments.component').then(c => c.ApartmentsComponent),},
  {path:'blocks/:apartmentId', loadComponent: () => import('./pages/blocks/blocks.component').then(c => c.BlocksComponent),},
  {path:'floors/:apartmentId/:blockId', loadComponent: () => import('./pages/floors/floors.component').then(c => c.FloorsComponent),},
  {path:'flats/:apartmentId/:blockId/:floorId', loadComponent: () => import('./pages/flats/flats.component').then(c => c.FlatsComponent),},
  {path:'flat-details/:apartmentId/:blockId/:floorId/:flatId', loadComponent: () => import('./pages/flat-details/flat-details.component').then(c => c.FlatDetailsComponent),},
  {path:'members', loadComponent: () => import('./pages/members/members.component').then(c => c.MembersComponent),},
];
