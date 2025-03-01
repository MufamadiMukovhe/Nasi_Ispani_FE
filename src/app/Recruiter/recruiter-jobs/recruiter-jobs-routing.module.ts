import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecruiterJobsPage } from './recruiter-jobs.page';

const routes: Routes = [
  {
    path: '',
    component: RecruiterJobsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecruiterJobsPageRoutingModule {}
