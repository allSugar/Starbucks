import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { orderUndoPage } from './order-undo';

@NgModule({
  declarations: [
    orderUndoPage,
  ],
  imports: [
    IonicPageModule.forChild(orderUndoPage),
  ],
})
export class UnOrdersPageModule {}
