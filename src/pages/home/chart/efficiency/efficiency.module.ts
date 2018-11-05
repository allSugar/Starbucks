import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EfficiencyPage } from './efficiency';
import { RepairModule } from '../../../template/repair.module';

@NgModule({
  declarations: [
    EfficiencyPage,
  ],
  imports: [
    RepairModule,
    IonicPageModule.forChild(EfficiencyPage),
  ],
})
export class EfficiencyPageModule {}
