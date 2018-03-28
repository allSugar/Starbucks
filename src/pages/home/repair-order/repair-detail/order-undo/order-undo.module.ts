import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { orderUndoPage } from './order-undo';

import { RepairModule } from '../../../../template/repair.module';

@NgModule({
  declarations: [
    orderUndoPage,
  ],
  imports: [
    RepairModule,
    IonicPageModule.forChild(orderUndoPage),
  ],
})
export class UnOrdersPageModule {}
