import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChartListPage } from './chart-list';

import { CategoryModule } from '../../../template/category.module';

@NgModule({
  declarations: [
    ChartListPage
  ],
  imports: [
    CategoryModule,
    IonicPageModule.forChild(ChartListPage)
  ],
})
export class ChartListPageModule {}
