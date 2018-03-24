import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VulnerablePartsPage } from './vulnerable-parts';

@NgModule({
  declarations: [
    VulnerablePartsPage,
  ],
  imports: [
    IonicPageModule.forChild(VulnerablePartsPage),
  ],
})
export class VulnerablePartsPageModule {}
