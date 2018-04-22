import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { CalendarModule } from 'ion2-calendar';
import { MyApp } from './app.component';

import { LoginPage } from '../pages/login/login';
import { TabsPage } from '../pages/tabs/tabs';
import { DraggablePage } from '../pages/modules/draggable/draggable';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HttpModule } from "@angular/http";
import { HttpService } from "../service/HttpService";
import { ToastService } from '../service/ToastService';
import { LoginService } from '../service/LoginService';

import { File } from '@ionic-native/file';
import { FileTransfer } from '@ionic-native/file-transfer';
import { FilePath } from '@ionic-native/file-path';
import { Camera } from '@ionic-native/camera';

import { IonicStorageModule } from '@ionic/storage';


@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    TabsPage,
    DraggablePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    CalendarModule,
    IonicModule.forRoot(MyApp, {
      backButtonText: '',//按钮内容
    }),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    TabsPage,
    DraggablePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HttpService,
    ToastService,
    LoginService,
    File,
    FileTransfer,
    FilePath,
    Camera,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
