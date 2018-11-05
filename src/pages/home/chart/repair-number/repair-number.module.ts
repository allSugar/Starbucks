import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RepairNumberPage } from './repair-number';
import { RepairModule } from '../../../template/repair.module';

@NgModule({
  declarations: [
    RepairNumberPage,
  ],
  imports: [
    RepairModule,
    IonicPageModule.forChild(RepairNumberPage),
  ],
})
export class RepairNumberPageModule {}
