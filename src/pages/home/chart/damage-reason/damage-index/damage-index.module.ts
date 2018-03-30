import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DamageIndexPage } from './damage-index';

@NgModule({
  declarations: [
      DamageIndexPage,
  ],
  imports: [
    IonicPageModule.forChild(DamageIndexPage),
  ],
})
export class DamagePageModule {}
