import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VulnerablePartsPage } from './vulnerable-parts';
import { RepairModule } from '../../../template/repair.module';


@NgModule({
  declarations: [
    VulnerablePartsPage,
  ],
  imports: [
    RepairModule,
    IonicPageModule.forChild(VulnerablePartsPage),
  ],
})
export class VulnerablePartsPageModule {}
