import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewsDetailPage } from './news-detail';

@NgModule({
  declarations: [
    NewsDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(NewsDetailPage),
  ],
})
export class NewsDetailPageModule {}
