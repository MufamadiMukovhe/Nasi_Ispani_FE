import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecruiterMenuPage } from './recruiter-menu.page';

const routes: Routes = [
  {
    path: '',
    component: RecruiterMenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecruiterMenuPageRoutingModule {}
