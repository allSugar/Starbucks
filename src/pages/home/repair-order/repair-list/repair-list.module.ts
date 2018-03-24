import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RepairListPage } from './repair-list';

@NgModule({
  declarations: [
    RepairListPage,
  ],
  imports: [
    IonicPageModule.forChild(RepairListPage),
  ],
})
export class RepairListPageModule {}
