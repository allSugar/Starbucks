import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddProblemPage } from './add-problem';

@NgModule({
  declarations: [
    AddProblemPage,
  ],
  imports: [
    IonicPageModule.forChild(AddProblemPage),
  ],
})
export class AddProblemPageModule {}
