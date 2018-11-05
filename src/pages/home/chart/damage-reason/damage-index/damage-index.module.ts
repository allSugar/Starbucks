import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DamageIndexPage } from './damage-index';
import { RepairModule } from '../../../../template/repair.module';

@NgModule({
  declarations: [
      DamageIndexPage,
  ],
  imports: [
    RepairModule,
    IonicPageModule.forChild(DamageIndexPage),
  ],
})
export class DamagePageModule {}
