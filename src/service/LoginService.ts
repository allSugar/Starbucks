import { App } from 'ionic-angular';
import { Injectable } from "@angular/core";
import { Storage } from '@ionic/storage';

import { LoginPage } from '../pages/login/login';

@Injectable()

export class LoginService {

  isLogin: any = false;
  userInfo: Object;

  constructor(
    private app: App,
    private storage: Storage
  ) { }

  isLoginFun(callback: any = null) {
    this.storage.get('userInfo').then((val) => {
      val = JSON.parse(val);
      if (!!val) {
        this.isLogin = !!val;
        this.userInfo = val;
        this.setCurrentAccount(val.currentAccount);
      }
      if (callback) {
        callback(!!val);
      }
    });
  }

  setCurrentAccount(account) {
    
  }

  loginOut() {
    this.storage.remove('userInfo');
    this.userInfo = {};
    this.app.getRootNav().setRoot(LoginPage);
  }
}
