import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddEducationPageRoutingModule } from './add-education-routing.module';

import { AddEducationPage } from './add-education.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddEducationPageRoutingModule, 
    ReactiveFormsModule
  ],
  declarations: [AddEducationPage]
})
export class AddEducationPageModule {}
