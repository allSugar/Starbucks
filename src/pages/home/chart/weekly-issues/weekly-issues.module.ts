import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WeeklyIssuesPage } from './weekly-issues';

@NgModule({
  declarations: [
    WeeklyIssuesPage,
  ],
  imports: [
    IonicPageModule.forChild(WeeklyIssuesPage),
  ],
})
export class WeeklyIssuesPageModule {}
