import { Component } from '@angular/core';
import { IonicPage, App } from 'ionic-angular';


import { HttpService } from '../../../../service/HttpService';
@IonicPage()
@Component({
  selector: 'page-repair-list',
  templateUrl: 'repair-list.html',
})

export class RepairListPage {

  orderList: Array<any> = [];
  order: Object[] = [];
  RES_ROOT: string;
  navCtrl: any;
  status: string = 'orderUndoPage';

  constructor(
    public app: App,
    public http: HttpService
  ) {
    this.getData();
    this.navCtrl = this.app.getRootNav();
  }

  getData() {
    var params = {
      method: 'repair.findStoreRepairOrder',
    }
    this.http.get(params).subscribe(res => {
      if (!!res && res.responseCode == 167050) {
        this.orderList = res.responseObj;
        for (var i = 0; i < this.orderList.length; i++) {
          var orderList = this.orderList[i];
          this.order.push({
            createTime: orderList.createTime,
            orderCode: orderList.orderCode,
            status: orderList.status
          })
        }
      }
    });
  }

  tabs(name: string) {
    this.status = name;
  }

  goToOtherPage(name, item) {
    if (name) {
      this.navCtrl.push(name);
    } else {
      this.navCtrl.push(this.status, { data: item });
    }

  }
}
