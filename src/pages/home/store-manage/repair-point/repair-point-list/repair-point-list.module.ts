import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RepairPointListPage } from './repair-point-list';

@NgModule({
  declarations: [
    RepairPointListPage,
  ],
  imports: [
    IonicPageModule.forChild(RepairPointListPage),
  ],
})
export class RepairPointListPageModule {}
