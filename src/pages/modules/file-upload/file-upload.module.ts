import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FileUploadPage } from './file-upload';

@NgModule({
  declarations: [
    FileUploadPage,
  ],
  imports: [
    IonicPageModule.forChild(FileUploadPage),
  ],
})
export class FileUploadPageModule {}
