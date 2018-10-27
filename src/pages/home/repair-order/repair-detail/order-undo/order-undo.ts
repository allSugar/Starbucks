import { Component } from '@angular/core';
import { IonicPage, App, NavParams } from 'ionic-angular';

import { HttpService } from '@/../../src/service/HttpService';
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
  isassign: Boolean = false;

  constructor(
    public app: App,
    public navParams: NavParams,
    public login: LoginService,
    public http: HttpService
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

  assignRepair() {
    console.log(1);
    this.isassign = true;
  }
  
  assignRepairNext() {
    this.navCtrl.push("AssignRepairPage");
  }
}
