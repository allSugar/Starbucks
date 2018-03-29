import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './index';

import { CategoryModule } from '../../template/category.module';

@NgModule({
  declarations: [
    HomePage,
  ],
  imports: [
    CategoryModule,
    IonicPageModule.forChild(HomePage),
  ],
})
export class HomePageModule {}
