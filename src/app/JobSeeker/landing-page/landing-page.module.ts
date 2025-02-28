import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LandingPagePageRoutingModule } from './landing-page-routing.module';
import { ProfileLayerPageModule } from 'src/app/components/profile-layer/profile-layer.module';
import { LandingPagePage } from './landing-page.page';
import { MenuPageModule } from "../../components/menu/menu.module";
import { SearchFormPageModule } from 'src/app/components/search-form/search-form.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LandingPagePageRoutingModule,
    ProfileLayerPageModule,
    SearchFormPageModule, 
    MenuPageModule
],
  declarations: [LandingPagePage]
})
export class LandingPagePageModule {}
