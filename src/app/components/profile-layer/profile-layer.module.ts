import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfileLayerPageRoutingModule } from './profile-layer-routing.module';

import { ProfileLayerPage } from './profile-layer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfileLayerPageRoutingModule
  ],
  declarations: [ProfileLayerPage],
  exports: [ProfileLayerPage]
})
export class ProfileLayerPageModule {}
