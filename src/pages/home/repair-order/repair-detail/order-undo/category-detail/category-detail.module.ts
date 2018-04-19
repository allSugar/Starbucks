import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CategoryDetailPage } from './category-detail';

@NgModule({
  declarations: [
    CategoryDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(CategoryDetailPage),
  ],
})
export class CategoryDetailPageModule {}
