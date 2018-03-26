import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrderDonePage } from './order-done';

@NgModule({
  declarations: [
    OrderDonePage,
  ],
  imports: [
    IonicPageModule.forChild(OrderDonePage),
  ],
})
export class OrderDonePageModule {}
