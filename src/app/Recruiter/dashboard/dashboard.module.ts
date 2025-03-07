import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardPageRoutingModule } from './dashboard-routing.module';

import { DashboardPage } from './dashboard.page';
import { ProfileLayerPageModule } from 'src/app/components/profile-layer/profile-layer.module';
import { RecruiterMenuPageModule } from 'src/app/components/recruiter-menu/recruiter-menu.module';
import { RecruiterJobsPageModule } from "../recruiter-jobs/recruiter-jobs.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashboardPageRoutingModule, ProfileLayerPageModule, RecruiterMenuPageModule,
    RecruiterJobsPageModule
],
  declarations: [DashboardPage],
  exports: [DashboardPage]
})
export class DashboardPageModule {}
