import { Component } from '@angular/core';
import { IonicPage, App, NavParams } from 'ionic-angular';

import { LoginService } from '@/../../src/service/LoginService';

@IonicPage()
@Component({
  selector: 'page-order-undo',
  templateUrl: 'order-undo.html',
})
export class orderUndoPage {

  data: any;
  navCtrl: any;
  userInfo: any;
  currentAccount: any;

  constructor(
    public app: App,
    public navParams: NavParams,
    public login: LoginService
  ) {
    this.currentAccount = this.login.userInfo['currentAccount'];
    this.userInfo = this.login.userInfo;
    this.navCtrl = this.app.getRootNav();
    this.data = navParams.get('data');
  }

  goToOtherPage(name: string) {
    this.navCtrl.push(name);
  }

  goToDetailPage(name) {
    this.navCtrl.push(name);
  }

}
