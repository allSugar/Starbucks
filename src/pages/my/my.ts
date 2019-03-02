import { Component } from '@angular/core';
import { App, IonicPage } from 'ionic-angular';

import { LoginService } from '../../service/LoginService';

@IonicPage()
@Component({
  selector: 'page-my',
  templateUrl: 'my.html',
})

export class MyPage {

  navCtrl: any;
  constructor(
    public app: App,
    private login: LoginService
  ) {
    console.log(this.login)
    this.navCtrl = this.app.getRootNav()
  }

  loginOut() {
    this.login.loginOut();
  }
}
