import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProblemDetailPage } from './problem-detail';

@NgModule({
  declarations: [
    ProblemDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(ProblemDetailPage),
  ],
})
export class ProblemDetailPageModule {}
