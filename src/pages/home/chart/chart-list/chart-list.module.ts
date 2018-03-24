import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChartListPage } from './chart-list';

@NgModule({
  declarations: [
    ChartListPage,
  ],
  imports: [
    IonicPageModule.forChild(ChartListPage),
  ],
})
export class ChartListPageModule {}
