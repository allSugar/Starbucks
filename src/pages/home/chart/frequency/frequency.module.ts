import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FrequencyPage } from './frequency';
import { RepairModule } from '../../../template/repair.module';
@NgModule({
  declarations: [
    FrequencyPage,
  ],
  imports: [
    RepairModule,
    IonicPageModule.forChild(FrequencyPage),
  ],
})
export class FrequencyPageModule {}
