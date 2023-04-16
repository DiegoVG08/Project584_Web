import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';

import { AuthGuard } from './auth/auth.guard';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.components';
import { inventoryComponent } from './inventory/inventory.component';
import { LoginComponent } from './auth/login.component';

//updates the link route  
const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'inventory', component: inventoryComponent,canActivate: [AuthGuard]},
  {path: 'contact', component : ContactComponent,canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
