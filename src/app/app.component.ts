import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login/login';
import { TabsPage } from '../pages/tabs/tabs';

import { LoginService } from '../service/LoginService';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  rootPage: any;

  constructor(
    platform: Platform,
    splashScreen: SplashScreen,
    login: LoginService
  ) {
    login.isLoginFun((val) => {
      val = JSON.parse(val);
      if (!!val) {
        login.isLogin = !!val;
        login.userInfo = val;
        this.rootPage = TabsPage;
      } else {
        this.rootPage = LoginPage;
      }
    });
    platform.ready().then(() => {
      splashScreen.hide();
    });
  }
}
