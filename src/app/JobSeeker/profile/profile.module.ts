import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilePageRoutingModule } from './profile-routing.module';

import { ProfilePage } from './profile.page';
import { MenuPageModule } from 'src/app/components/menu/menu.module';
import { ProfileLayerPageModule } from 'src/app/components/profile-layer/profile-layer.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilePageRoutingModule,
    MenuPageModule,ProfileLayerPageModule
    
  ],
  declarations: [ProfilePage],
  exports:[ProfilePage]
})
export class ProfilePageModule {}
