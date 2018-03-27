import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { OrderInfoTmpl } from './order-info';
import { OrderPointTmpl } from './order-point';

const COMPONENTS = [
  OrderInfoTmpl,
  OrderPointTmpl
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [IonicPageModule.forChild(COMPONENTS)],
  exports: [...COMPONENTS],
})
export class TmplModule {
}
