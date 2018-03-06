import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SlidePage } from './slide';

@NgModule({
  declarations: [
    SlidePage,
  ],
  imports: [
    IonicPageModule.forChild(SlidePage),
  ],
})
export class SlidePageModule {}
