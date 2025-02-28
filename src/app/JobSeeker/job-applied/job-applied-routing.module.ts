import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JobAppliedPage } from './job-applied.page';

const routes: Routes = [
  {
    path: '',
    component: JobAppliedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JobAppliedPageRoutingModule {}
