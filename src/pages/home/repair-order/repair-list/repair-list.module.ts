import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RepairListPage } from './repair-list';
import { RepairModule } from '../../../template/repair.module';

@NgModule({
  declarations: [
    RepairListPage,
  ],
  imports: [
    RepairModule,
    IonicPageModule.forChild(RepairListPage),
  ],
})
export class RepairListPageModule {}
