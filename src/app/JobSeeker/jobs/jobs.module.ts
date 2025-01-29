import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JobsPageRoutingModule } from './jobs-routing.module';
import { ProfileLayerPageModule } from 'src/app/components/profile-layer/profile-layer.module';


import { JobsPage } from './jobs.page';
import { SearchFormPageModule } from 'src/app/components/search-form/search-form.module';
import { MenuPageModule } from "../../components/menu/menu.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JobsPageRoutingModule,
    ProfileLayerPageModule,
    SearchFormPageModule,
    MenuPageModule
],
  declarations: [JobsPage]
})
export class JobsPageModule {}
