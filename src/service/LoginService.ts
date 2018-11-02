import { App } from 'ionic-angular';
import { Injectable } from "@angular/core";
import { Storage } from '@ionic/storage';

import { LoginPage } from '../pages/login/login';

@Injectable()

export class LoginService {

  isLogin: any = false;
  userInfo: Object;
  currentAccount: Object;
  id: any;

  constructor(
    private app: App,
    private storage: Storage
  ) {
    
  }

  isLoginFun(callback: any = null) {
    this.storage.get('userInfo').then((val) => {
      val = JSON.parse(val);
      if (!!val) {
        this.isLogin = !!val;
        this.userInfo = val;
        this.setCurrentId(val.id);
        this.setCurrentAccount(val.currentAccount);
      }
      if (callback) {
        callback(!!val);
      }
    });
  }

  setCurrentAccount(account) {
    this.currentAccount = account;
  }
  setCurrentId(id) {
    this.id = id;
  }

  loginOut() {
    this.storage.remove('userInfo');
    this.userInfo = {};
    this.id = "";
    this.currentAccount = {};
    this.app.getRootNav().setRoot(LoginPage);
  }
}
