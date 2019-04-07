import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { OrderInfoTmpl } from './order-info';
import { OrderPointShowTmpl } from './order-point-show/order-point-show';
import { OrderPointListTmpl } from './order-point-list/order-point-list';
import { RepairOrderTmpl } from './repair-order/repair-order';
import { OrderExplainTmpl } from './order-explain';
import { TimeSelectTmpl } from './time-select';
import { TabsTmpl } from './tabs/tabs';
import { TrackInfoTmpl } from './track-info/trackInfo'
import { ReportTabTmpl } from './reprot-tab/report-tab'

const COMPONENTS = [
  OrderInfoTmpl,
  OrderPointShowTmpl,
  OrderPointListTmpl,
  RepairOrderTmpl,
  OrderExplainTmpl,
  TimeSelectTmpl,
  TabsTmpl,
  TrackInfoTmpl,
  ReportTabTmpl
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [IonicPageModule.forChild(COMPONENTS)],
  exports: [...COMPONENTS],
})
export class RepairModule {
}
