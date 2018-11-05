import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddExplainPage } from './add-explain';

import { RepairModule } from '../../../../../template/repair.module';

@NgModule({
  declarations: [
    AddExplainPage,
  ],
  imports: [
    RepairModule,
    IonicPageModule.forChild(AddExplainPage),
  ],
})
export class AddExplainPageModule {}
