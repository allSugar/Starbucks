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
  sta: number = 0;

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
    this.sta = 0;
  }

  goToOtherPage(name, item) {
    if (name) {
      this.navCtrl.push(name);
    } else {
      this.navCtrl.push(this.status, { data: item });
    }
  }
  show(n: number) {
    this.sta = this.sta == n ? 0 : n;
  }

  oindex: Number = 0;
  changeActive(i:Number) {
    this.oindex = i;
    this.sta = 0;
  }
  sort: object[] = [
    { filter: '全部'},
    { filter: '厂商名字a-z'},
    { filter: '厂商名字z-a'},
    { filter: '问题由多到少'},
    { filter: '问题由少到多'}
  ];
  mode: object[] = [
    {filter: '紧急'},
    {filter: '一般'}
  ];
  shop: object[] = [
    {filter: '苏南方圆'},
    {filter: '星巴克'},
    {filter: '苏南方圆'},
    {filter: '星巴克'},
    {filter: '苏南方圆'}
  ];
  date: object[] = [
    {filter: '日期'},
    {filter: '昨天'},
    {filter: '今天'},
    {filter: '前天'}
  ];
}
