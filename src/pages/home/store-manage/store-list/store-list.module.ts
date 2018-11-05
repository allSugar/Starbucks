import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StoreManageListPage } from './store-list';


@NgModule({
  declarations: [
    StoreManageListPage,
  ],
  imports: [
    IonicPageModule.forChild(StoreManageListPage),
  ],
})
export class StoreManageLisPageModule {}
