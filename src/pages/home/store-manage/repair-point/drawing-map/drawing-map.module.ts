import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AngularDraggableModule } from 'angular2-draggable';
import { DrawingMapPage } from './drawing-map';

@NgModule({
  declarations: [
    DrawingMapPage
  ],
  imports: [
    IonicPageModule.forChild(DrawingMapPage),
    AngularDraggableModule
  ],
})
export class DrawingMapPageModule { }
