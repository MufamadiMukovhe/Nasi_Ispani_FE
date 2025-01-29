import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LandingPagePageRoutingModule } from './landing-page-routing.module';
import { ProfileLayerPageModule } from 'src/app/components/profile-layer/profile-layer.module';
import { LandingPagePage } from './landing-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LandingPagePageRoutingModule,
    ProfileLayerPageModule
  ],
  declarations: [LandingPagePage]
})
export class LandingPagePageModule {}
