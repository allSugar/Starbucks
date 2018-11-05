import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QuestionStatusPage } from './question-status';

@NgModule({
  declarations: [
    QuestionStatusPage,
  ],
  imports: [
    IonicPageModule.forChild(QuestionStatusPage),
  ],
})
export class QuestionStatusPageModule {}
