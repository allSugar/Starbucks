import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrderDonePage } from './order-done';

import { TmplModule } from '../../../../template/template.module';

@NgModule({
  declarations: [
    OrderDonePage,
  ],
  imports: [
    TmplModule,
    IonicPageModule.forChild(OrderDonePage),
  ],
})
export class OrderDonePageModule {}
