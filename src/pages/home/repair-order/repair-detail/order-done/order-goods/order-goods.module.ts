import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrderGoodsPage } from './order-goods';

@NgModule({
  declarations: [
    OrderGoodsPage,
  ],
  imports: [
    IonicPageModule.forChild(OrderGoodsPage),
  ],
})
export class OrderGoodsPageModule {}
