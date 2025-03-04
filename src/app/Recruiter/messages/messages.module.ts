import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MessagesPageRoutingModule } from './messages-routing.module';

import { MessagesPage } from './messages.page';
import { ProfileLayerPageModule } from 'src/app/components/profile-layer/profile-layer.module';
import { MenuPageModule } from 'src/app/components/menu/menu.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MessagesPageRoutingModule, ProfileLayerPageModule, MenuPageModule
  ],
  declarations: [MessagesPage],
  exports: [MessagesPage]
})
export class MessagesPageModule {}
