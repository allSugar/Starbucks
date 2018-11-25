import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReportDetailPage } from './report-detail';

@NgModule({
  declarations: [
    ReportDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(ReportDetailPage),
  ],
})
export class ReportDetailPageModule {}
