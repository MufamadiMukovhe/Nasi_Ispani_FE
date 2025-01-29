import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterPage } from './register.page';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: 'register',
    component: RegisterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), ReactiveFormsModule, FormsModule],
  exports: [RouterModule],
})
export class RegisterPageRoutingModule {}
