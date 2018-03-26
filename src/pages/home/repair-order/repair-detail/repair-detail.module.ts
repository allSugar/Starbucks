import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RepairDetailPage } from './repair-detail';

@NgModule({
  declarations: [
    RepairDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(RepairDetailPage),
  ],
})
export class RepairDetailPageModule {}
