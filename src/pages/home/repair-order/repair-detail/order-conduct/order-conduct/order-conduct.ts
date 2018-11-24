import { Component } from '@angular/core';
import { IonicPage, App, NavParams } from 'ionic-angular';

import { RoleTypeService } from '@/../../src/service/RoleTypeService';

@IonicPage()
@Component({
  selector: 'page-order-conduct',
  templateUrl: 'order-conduct.html',
})
export class OrderConductPage {

  navCtrl: any;
  tabStatus: number = 0;
  roleType: any;
  data: any = {};

  constructor(
    public app: App,
    public navParams: NavParams,
    public role:RoleTypeService
  ) {
    this.navCtrl = this.app.getRootNav();
    this.data = this.navParams.get('data');
    
    this.role.setUserRole(val => {
      this.roleType = val;
    });
  }

  tabs(i: number) {
    this.tabStatus = i;
  }

  goToOtherPage(name) {
    this.navCtrl.push(name);
  }

  goToDetailPage(name) {
    this.navCtrl.push(name);
  }
}
