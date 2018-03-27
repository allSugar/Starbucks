import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrderConductPage } from './order-conduct';

import { Test } from '../../../../template/test';
@NgModule({
  declarations: [
    OrderConductPage,
    Test,
  ],
  imports: [
    IonicPageModule.forChild(OrderConductPage),
  ],
})
export class OrderConductPageModule {}
