import { Component } from '@angular/core';
import { IonicPage, App, NavParams } from 'ionic-angular';

import { RoleTypeService } from '@/../../src/service/RoleTypeService';
import { HttpService } from '@/../../src/service/HttpService';

@IonicPage()
@Component({
  selector: 'page-repair-doing',
  templateUrl: 'repair-doing.html',
})
export class RepairDoingPage {

  navCtrl: any;
  tabStatus: number = 0;
  roleType: any;
  data: any = {};
  completeLen: any = 0;

  constructor(
    public app: App,
    public navParams: NavParams,
    public role: RoleTypeService,
    public http: HttpService,
  ) {
    this.navCtrl = this.app.getRootNav();

    let remove = this.navParams.get('data');
    if (remove) {
      let len = this.navParams.get('len'),
        startIndex = this.navCtrl.getViews().length - len;
      this.navCtrl.remove(startIndex, len);
    }

    this.data = this.navParams.get('data');
    this.GetOrderdetail()
    this.role.setUserRole(val => {
      this.roleType = val;
    });
  }

  GetOrderdetail() {
    let params = {
      method: 'repair.getStoreRepairOrderById',
      id: this.data.id
    }
    this.http.get(params).subscribe(res => {
      if (res.responseCode == '167060') {
        res = res.responseObj
        res.orderItemList = this.data.orderItemList
        this.data = res
        this.SetOrderList();
      }
    })
  }

  SetOrderList() {
    this.data.orderItemList.map(item => {
      if (item.status === 7) {
        this.completeLen++;
      }
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

  HandleCompleteOrderList(id) {
    this.data.orderItemList.map(item => {
      if (item.id === id) {
        this.completeLen++;
        item.status = 7;
      }
    });

    if (this.data.status < 7) {
      this.HandleCompleteOrder(this.completeLen === this.data.orderItemList.length);
    }
    if (
      this.data.status === 7 &&
      this.completeLen === this.data.orderItemList.length
    ) {
      this.HandleCompleteOrder(true);
    }
  }

  HandleCompleteOrder(value) {
    let params = { method: "repair.operationStoreRepairOrder", id: this.data.id, status: 7 };
    if (value) {
      params.status = 8;
    }
    this.http.get(params).subscribe(res => {
      if (res.responseCode == "167020") {
        if (params.status === 8) {
          this.navCtrl.push("RepairListPage", { tabs: "OrderConductPage", remove: true, len: 2 });
        }
      }
    });
  }
}
