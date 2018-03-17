import { Injectable } from "@angular/core";
import { Storage } from '@ionic/storage';

// import { LoginPage } from '../pages/login/login';

@Injectable()

export class LoginService {

  isLogin: Boolean = false;
  userInfo:Object;

  constructor(
    private storage: Storage
  ) {
    var userInfo = this.storage.get('userInfo');
    this.isLogin = !!userInfo;
    if(this.isLogin) this.userInfo = userInfo;
  }

  loginOut() {
    this.storage.remove('userInfo');
    // this.navCtrl.setRoot(LoginPage);
  }
}