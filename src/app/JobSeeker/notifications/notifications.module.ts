import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotificationsPageRoutingModule } from './notifications-routing.module';
import { ProfileLayerPage } from 'src/app/components/profile-layer/profile-layer.page';

import { NotificationsPage } from './notifications.page';
import { ProfileLayerPageModule } from 'src/app/components/profile-layer/profile-layer.module';
import { MenuPageModule } from 'src/app/components/menu/menu.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotificationsPageRoutingModule,
    ProfileLayerPageModule,
    MenuPageModule
  ],
  declarations: [NotificationsPage]
})
export class NotificationsPageModule {}
