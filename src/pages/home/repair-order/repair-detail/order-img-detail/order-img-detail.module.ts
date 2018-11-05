import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrderImgDetailPage } from './order-img-detail';

@NgModule({
  declarations: [
    OrderImgDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(OrderImgDetailPage),
  ],
})
export class OrderImgDetailPageModule {}
