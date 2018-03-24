import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EfficiencyPage } from './efficiency';

@NgModule({
  declarations: [
    EfficiencyPage,
  ],
  imports: [
    IonicPageModule.forChild(EfficiencyPage),
  ],
})
export class EfficiencyPageModule {}
