import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecruiterJobsPageRoutingModule } from './recruiter-jobs-routing.module';

import { RecruiterJobsPage } from './recruiter-jobs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecruiterJobsPageRoutingModule
  ],
  declarations: [RecruiterJobsPage]
})
export class RecruiterJobsPageModule {}
