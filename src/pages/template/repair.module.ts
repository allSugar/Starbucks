import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { OrderInfoTmpl } from './order-info';
import { OrderPointTmpl } from './order-point';
import { RepairOrderTmpl } from './repair-order';
import { OrderExplainTmpl } from './order-explain';

const COMPONENTS = [
  OrderInfoTmpl,
  OrderPointTmpl,
  RepairOrderTmpl,
  OrderExplainTmpl
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [IonicPageModule.forChild(COMPONENTS)],
  exports: [...COMPONENTS],
})
export class RepairModule {
}
