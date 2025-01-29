import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LogoComponentPageRoutingModule } from './logo-component-routing.module';

import { LogoComponentPage } from './logo-component.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LogoComponentPageRoutingModule
  ],
  declarations: [LogoComponentPage]
})
export class LogoComponentPageModule {}
