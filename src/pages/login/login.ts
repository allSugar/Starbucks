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
    userName: "15503308184",
    // userName: "16666666666",
    passWord: "123456",
    accountId: Number
  }

  accountList: Array<any> = [];

  constructor(
    public navCtrl: NavController,
    public http: HttpService,
    private toast: ToastService,
    private storage: Storage,
    public login: LoginService
  ) {
    this.GetAccountList();
  }

  HandleChange() {
    this.GetAccountList();
  }

  GetAccountList() {
    if (!this.userInfo.userName) {
      this.toast.info("请输入用户名！");
      this.accountList = [];
      return false;
    }

    let params = { method: "userManager.findUserAccount", userName: this.userInfo.userName };
    this.http.get(params).subscribe(res => {
      if (!!res && res.responseCode == 103070) {
        this.accountList = res.responseObj.accountList;
        this.userInfo.accountId = this.accountList[0].id;
      } else {
        this.accountList = [];
        this.toast.info("请输入正确对用户名！");
      }
    }, error => {

    });
  }

  logIn() {
    if (!this.userInfo.userName) {
      this.toast.info("请输入账号！");
      return false;
    }

    if (!this.userInfo.passWord) {
      this.toast.info("请输入密码！");
      return false;
    }

    this.http.get(this.userInfo).subscribe(res => {
      if (!!res) {
        if (!!res && res.responseCode == 101020) {
          let val = res.responseObj;
          val.clientId = res.clientId;
          this.storage.set("userInfo", JSON.stringify(val));
          this.login.isLoginFun();
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
