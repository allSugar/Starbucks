import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DrawingMapPage } from './drawing-map';

@NgModule({
  declarations: [
    DrawingMapPage,
  ],
  imports: [
    IonicPageModule.forChild(DrawingMapPage),
  ],
})
export class DrawingMapPageModule {}
