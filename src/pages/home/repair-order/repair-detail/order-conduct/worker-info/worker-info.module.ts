import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WorkerInfoPage } from './worker-info';

@NgModule({
  declarations: [
    WorkerInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(WorkerInfoPage),
  ],
})
export class WorkerInfoPageModule {}
