import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrderConductPage } from './order-conduct';

import { RepairModule } from '../../../../template/repair.module';

@NgModule({
  declarations: [
    OrderConductPage
  ],
  imports: [
    RepairModule,
    IonicPageModule.forChild(OrderConductPage),
  ],
})
export class OrderConductPageModule {
  
}
