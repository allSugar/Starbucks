import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RepairDoingPage } from './repair-doing';

import { RepairModule } from '../../../../template/repair.module';

@NgModule({
  declarations: [
    RepairDoingPage,
  ],
  imports: [
    RepairModule,
    IonicPageModule.forChild(RepairDoingPage),
  ],
})
export class RepairDoingPageModule {}
