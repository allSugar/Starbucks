import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { TabsPage } from '../tabs/tabs';

import { HttpService } from '../../service/HttpService';
import { ToastService } from '../../service/ToastService';
import { LoginService } from "../../service/LoginService";

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})

export class LoginPage {

  userInfo: any = {
    method: "userManager.login",
    clientId: "request",
    userName: "13920905364",
    passWord: "a1234567",
    accountId: ""
  }

  accountList: Array<any> = [];

  constructor(
    public navCtrl: NavController,
    public http: HttpService,
    private toast: ToastService,
    private storage: Storage,
    public login: LoginService
  ) {
    var params = { method: "userManager.findAccount" };
    this.http.get(params).subscribe(res => {
      if (!!res && res.responseCode == 103010) {
        this.accountList = res.responseObj;
      };
    }, error => {

    });
  }

  logIn() {
    if (!this.userInfo.userName) {
      this.toast.info("请输入账号");
      return false;
    }

    if (!this.userInfo.passWord) {
      this.toast.info("请输入密码");
      return false;
    }

    this.http.get(this.userInfo).subscribe(res => {
      if (!!res) {
        if (!!res && res.responseCode == 101020) {
          let val = res.responseObj;
          val.clientId = res.clientId;
          alert(JSON.stringify(val));
          this.storage.set("userInfo", JSON.stringify(val));
          this.login.isLogin = !!val;
          this.login.userInfo = val;
          this.navCtrl.setRoot(TabsPage);
        } else {
          this.toast.info(res.responseMsg)
        }
      } else {
        this.toast.info("登录失败！");
      }
    });
  }
}
