import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { OrderInfoTmpl } from './order-info';
import { OrderPointTmpl } from './order-point/order-point';
import { RepairOrderTmpl } from './repair-order';
import { OrderExplainTmpl } from './order-explain';
import { TimeSelectTmpl } from './time-select';
import { TabsTmpl } from './tabs';

const COMPONENTS = [
  OrderInfoTmpl,
  OrderPointTmpl,
  RepairOrderTmpl,
  OrderExplainTmpl,
  TimeSelectTmpl,
  TabsTmpl
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [IonicPageModule.forChild(COMPONENTS)],
  exports: [...COMPONENTS],
})
export class RepairModule {
}
