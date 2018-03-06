import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AlphaListPage } from './alpha-list';

@NgModule({
  declarations: [
    AlphaListPage,
  ],
  imports: [
    IonicPageModule.forChild(AlphaListPage),
  ],
})
export class AlphaListPageModule {}
