import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JobAppliedPageRoutingModule } from './job-applied-routing.module';

import { JobAppliedPage } from './job-applied.page';
import { ProfileLayerPageModule } from 'src/app/components/profile-layer/profile-layer.module';
import { SearchFormPageModule } from 'src/app/components/search-form/search-form.module';
import { MenuPageModule } from 'src/app/components/menu/menu.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JobAppliedPageRoutingModule, ProfileLayerPageModule, SearchFormPageModule, MenuPageModule
  ],
  declarations: [JobAppliedPage],
  exports: [JobAppliedPage]
})
export class JobAppliedPageModule {}
