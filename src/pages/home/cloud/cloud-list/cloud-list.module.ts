import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CloudListPage } from './cloud-list';

@NgModule({
  declarations: [
    CloudListPage,
  ],
  imports: [
    IonicPageModule.forChild(CloudListPage),
  ],
})
export class CloudListPageModule {}
