import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EmergencyLevelPage } from './emergency-level';

@NgModule({
  declarations: [
    EmergencyLevelPage,
  ],
  imports: [
    IonicPageModule.forChild(EmergencyLevelPage),
  ],
})
export class EmergencyLevelPageModule {}
