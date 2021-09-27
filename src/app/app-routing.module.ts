import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListComponent } from './list/list.component';
import { FormCreateComponent } from './form-create/form-create.component';
import { FormEditComponent } from './form-edit/form-edit.component';
import { HomeComponent } from './home/home.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { AuthGuard } from './_helpers/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginFormComponent},
  { path: 'registration', component: RegistrationFormComponent},
  { path: '', redirectTo: '/tasks', pathMatch: 'full' },
  { path: 'tasks', component: ListComponent }, 
  { path: 'create', component: FormCreateComponent }, 
  { path: 'edit/:id', component: FormEditComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

