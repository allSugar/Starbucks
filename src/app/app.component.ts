import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login/login';
import { TabsPage } from '../pages/tabs/tabs';

import { LoginService } from '../model/LoginService';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  rootPage: any;

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    login: LoginService
  ) {
    var _self = this;
    login.isLoginFun(function (val) {
      val = JSON.parse(val);
      if (!!val) {
        login.isLogin = !!val;
        login.userInfo = val;
        _self.rootPage = TabsPage;
      } else {
        _self.rootPage = LoginPage;
      }
    });
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
