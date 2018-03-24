import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DamagePage } from './damage';

@NgModule({
  declarations: [
    DamagePage,
  ],
  imports: [
    IonicPageModule.forChild(DamagePage),
  ],
})
export class DamagePageModule {}
