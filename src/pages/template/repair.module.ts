import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { OrderInfoTmpl } from './order-info';
import { OrderPointShowTmpl } from './order-point-show/order-point-show';
import { OrderPointListTmpl } from './order-point-list/order-point-list';
import { RepairOrderTmpl } from './repair-order/repair-order';
import { OrderExplainTmpl } from './order-explain';
import { TimeSelectTmpl } from './time-select';
import { TabsTmpl } from './tabs';

const COMPONENTS = [
  OrderInfoTmpl,
  OrderPointShowTmpl,
  OrderPointListTmpl,
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
