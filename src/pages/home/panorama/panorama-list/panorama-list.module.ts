import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PanoramaListPage } from './panorama-list';

@NgModule({
  declarations: [
    PanoramaListPage,
  ],
  imports: [
    IonicPageModule.forChild(PanoramaListPage),
  ],
})
export class PanoramaListPageModule {}
