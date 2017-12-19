import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TabsPage } from "../tabs/tabs";

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})

export class LoginPage {

  constructor(public navCtrl: NavController) {}

  logIn(username: HTMLInputElement, password: HTMLInputElement) {

      if(!username.value) {
        alert("请输入账号");
        return false;
      }
      
      if(!password.value) {
        alert("请输入密码");
        return false;
      }

      this.navCtrl.setRoot(TabsPage);
  }
}
