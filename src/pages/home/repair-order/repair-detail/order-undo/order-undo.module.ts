import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { orderUndoPage } from './order-undo';

import { TmplModule } from '../../../../template/template.module';

@NgModule({
  declarations: [
    orderUndoPage,
  ],
  imports: [
    TmplModule,
    IonicPageModule.forChild(orderUndoPage),
  ],
})
export class UnOrdersPageModule {}
