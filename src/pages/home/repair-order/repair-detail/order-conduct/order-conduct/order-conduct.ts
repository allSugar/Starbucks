import { Component } from '@angular/core';
import { IonicPage, App, NavParams } from 'ionic-angular';

import { RoleTypeService } from '@/../../src/service/RoleTypeService';
import { RepairOrder } from '../../untils';

@IonicPage()
@Component({
  selector: 'page-order-conduct',
  templateUrl: 'order-conduct.html',
})
export class OrderConductPage {

  navCtrl: any;
  tabStatus: number = 0;
  roleType: any;
  id: any;
  data: any = {};

  constructor(
    public app: App,
    public navParams: NavParams,
    public role: RoleTypeService,
    public order: RepairOrder
  ) {
    this.navCtrl = this.app.getRootNav();

    this.id = this.navParams.get('id');

    this.order.Init(this.id).then(res => {
      this.data = res;
    })

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
