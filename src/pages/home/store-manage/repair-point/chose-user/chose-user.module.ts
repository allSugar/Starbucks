import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChoseUserPage } from './chose-user';

@NgModule({
  declarations: [
    ChoseUserPage,
  ],
  imports: [
    IonicPageModule.forChild(ChoseUserPage),
  ],
})
export class ChoseUserPageModule {}
