import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StoreManagePage } from './index';

@NgModule({
  declarations: [
    StoreManagePage,
  ],
  imports: [
    IonicPageModule.forChild(StoreManagePage),
  ],
})
export class ManagePageModule {}
