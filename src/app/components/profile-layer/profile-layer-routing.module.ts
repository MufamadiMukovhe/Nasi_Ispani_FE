import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileLayerPage } from './profile-layer.page';

const routes: Routes = [
  {
    path: '',
    component: ProfileLayerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileLayerPageRoutingModule {}
