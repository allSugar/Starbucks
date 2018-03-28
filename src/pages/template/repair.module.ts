import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { OrderInfoTmpl } from './order-info';
import { OrderPointTmpl } from './order-point';
import { RepairOrderTmpl } from './repair-order';

const COMPONENTS = [
  OrderInfoTmpl,
  OrderPointTmpl,
  RepairOrderTmpl
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [IonicPageModule.forChild(COMPONENTS)],
  exports: [...COMPONENTS],
})
export class RepairModule {
}
