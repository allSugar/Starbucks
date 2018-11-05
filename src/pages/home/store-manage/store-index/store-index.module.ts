import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StoreIndexPage } from './store-index';

import { CategoryModule } from '../../../template/category.module';

@NgModule({
  declarations: [
    StoreIndexPage,
  ],
  imports: [
    CategoryModule,
    IonicPageModule.forChild(StoreIndexPage),
  ],
})
export class StoreIndexPageModule {}
