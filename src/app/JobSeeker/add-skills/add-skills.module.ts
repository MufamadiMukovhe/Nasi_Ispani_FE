import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddSkillsPageRoutingModule } from './add-skills-routing.module';

import { AddSkillsPage } from './add-skills.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddSkillsPageRoutingModule, ReactiveFormsModule
  ],
  declarations: [AddSkillsPage]
})
export class AddSkillsPageModule {}
