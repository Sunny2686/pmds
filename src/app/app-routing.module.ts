import { ProjectListsComponent } from './project-lists/project-lists/project-lists.component';
import { LandingComponent } from './dashboard/landing/landing.component';
import { SignupComponent } from './authentication/signup/signup.component';
import { LoginComponent } from './authentication/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { AuthGuard } from './guard/auth.guard';
import { ProjectDetailsComponent } from './project-details/project-details/project-details.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {
    path: 'dashboard',
    component: LandingComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'project-lists',
    component: ProjectListsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'project-details',
    component: ProjectDetailsComponent,
   // canActivate: [AuthGuard]
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', pathMatch: 'full', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
