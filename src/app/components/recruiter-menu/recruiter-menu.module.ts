import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecruiterMenuPageRoutingModule } from './recruiter-menu-routing.module';

import { RecruiterMenuPage } from './recruiter-menu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecruiterMenuPageRoutingModule
  ],
  declarations: [RecruiterMenuPage],
  exports: [RecruiterMenuPage]
})
export class RecruiterMenuPageModule {}
