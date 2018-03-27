import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrderConductPage } from './order-conduct';

import { TmplModule } from '../../../../template/template.module';

@NgModule({
  declarations: [
    OrderConductPage
  ],
  imports: [
    TmplModule,
    IonicPageModule.forChild(OrderConductPage),
  ],
})
export class OrderConductPageModule {
  
}
