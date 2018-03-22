import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { TabsPage } from '../tabs/tabs';

import { HttpService } from '../../service/HttpService';
import { ToastService } from '../../service/ToastService';

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
  ) {
    var params = { method: "userManager.findAccount" };
    this.http.get(params).subscribe(res => {
      if (res.responseCode == 103010) {
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
      if (res.responseCode == 101020) {
        res.responseObj.clientId = res.clientId;
        this.storage.set("userInfo", JSON.stringify(res.responseObj));
        this.navCtrl.setRoot(TabsPage);
      } else if (res.responseMsg) {
        this.toast.info(res.responseMsg)
      } else {
        this.toast.info("登录失败！");
      }
    });
  }
}
