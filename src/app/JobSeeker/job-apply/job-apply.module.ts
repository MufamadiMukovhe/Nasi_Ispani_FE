import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JobApplyPageRoutingModule } from './job-apply-routing.module';

import { JobApplyPage } from './job-apply.page';
import { MenuPageModule } from "../../components/menu/menu.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JobApplyPageRoutingModule,
    MenuPageModule,
    ReactiveFormsModule
],
  declarations: [JobApplyPage],
  exports: [JobApplyPage]
})
export class JobApplyPageModule {}
