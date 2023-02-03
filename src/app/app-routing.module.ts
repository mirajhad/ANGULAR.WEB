// Module
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { AboutComponent } from './Components/about/about.component'
import { LoginComponent } from './Components/login/login.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'login', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
