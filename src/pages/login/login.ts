import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from "../tabs/tabs";
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  logIn(username: HTMLInputElement, password: HTMLInputElement) {
      if (username.value.length == 0) {
          alert("请输入账号");
      } else if (password.value.length == 0) {
          alert("请输入密码");
      } else {
          let userinfo: string = '用户名：' + username.value + '密码：' + password.value;
          alert(userinfo);
          this.navCtrl.push(TabsPage);
      }
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
