import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StoreInformationPage } from './store-information';

@NgModule({
  declarations: [
    StoreInformationPage,
  ],
  imports: [
    IonicPageModule.forChild(StoreInformationPage),
  ],
})
export class StoreInformationPageModule {}
