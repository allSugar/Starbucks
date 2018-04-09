import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrderDonePage } from './order-done';

import { RepairModule } from '../../../../../template/repair.module';

@NgModule({
  declarations: [
    OrderDonePage,
  ],
  imports: [
    RepairModule,
    IonicPageModule.forChild(OrderDonePage),
  ],
})
export class OrderDonePageModule {}
