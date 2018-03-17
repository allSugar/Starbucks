import { Injectable } from "@angular/core";
import { Storage } from '@ionic/storage';

// import { LoginPage } from '../pages/login/login';

@Injectable()

export class LoginService {

  isLogin: any = false;
  userInfo:Object;

  constructor(
    private storage: Storage
  ) {
  }

  isLoginFun(callback:any) {
    this.storage.get('userInfo').then((val) => callback(val));
  }

  loginOut() {
    this.storage.remove('userInfo');
    // this.navCtrl.setRoot(LoginPage);
  }
}