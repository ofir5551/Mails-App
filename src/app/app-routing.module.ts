import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { MailItemComponent } from './mail-item/mail-item.component';
import { MailResolver } from './shared/resolvers/mail.resolver';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  // { path: 'home', component: HomeComponent },
  { path: 'mail/:id', component: MailItemComponent, resolve: [MailResolver] },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: ':id',
        component: MailItemComponent,
        resolve: [MailResolver],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
