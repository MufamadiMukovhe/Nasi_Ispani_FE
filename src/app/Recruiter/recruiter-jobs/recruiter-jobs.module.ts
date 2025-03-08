import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecruiterJobsPageRoutingModule } from './recruiter-jobs-routing.module';

import { RecruiterJobsPage } from './recruiter-jobs.page';
import { MenuPageModule } from 'src/app/components/menu/menu.module';
import { ProfileLayerPageModule } from 'src/app/components/profile-layer/profile-layer.module';
import { SearchFormPageModule } from 'src/app/components/search-form/search-form.module';
import { RecruiterMenuPageModule } from 'src/app/components/recruiter-menu/recruiter-menu.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecruiterJobsPageRoutingModule, 
    MenuPageModule,
    ProfileLayerPageModule, SearchFormPageModule, RecruiterMenuPageModule
  ],
  declarations: [RecruiterJobsPage],
  exports: [RecruiterJobsPage]
})
export class RecruiterJobsPageModule {}
