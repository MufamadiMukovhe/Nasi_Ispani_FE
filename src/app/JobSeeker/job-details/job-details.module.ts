import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JobDetailsPageRoutingModule } from './job-details-routing.module';

import { JobDetailsPage } from './job-details.page';
import { MenuPageModule } from "../../components/menu/menu.module";
import { ProfileLayerPageModule } from "../../components/profile-layer/profile-layer.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JobDetailsPageRoutingModule,
    MenuPageModule,
    ProfileLayerPageModule
],
  declarations: [JobDetailsPage]
})
export class JobDetailsPageModule {}
