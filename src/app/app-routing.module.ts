import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './core/components/layouts/landing/landing.component';
// this module will help us to handle routes for modules(99%) & components(1%)
const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
  },
  {
    path: 'users', // it will hold the path to the user module
    loadChildren: () =>
      import('./users/users.module').then((m) => m.UsersModule),
    // it will help us to load the user module dynamically
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./profile/profile.module').then((m) => m.ProfileModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
