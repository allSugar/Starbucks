import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SortPage } from './sort';
import { RepairModule } from '../../../template/repair.module';


@NgModule({
  declarations: [
    SortPage,
  ],
  imports: [
      RepairModule,
    IonicPageModule.forChild(SortPage),
  ],
})
export class SortPageModule {}
