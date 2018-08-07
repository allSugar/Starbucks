import { Component } from '@angular/core';
import { IonicPage, App, LoadingController} from 'ionic-angular';


import { BaseUI } from '../../../../directives/comm/baseui';
import { HttpService } from '../../../../service/HttpService';
@IonicPage()
@Component({
  selector: 'page-repair-list',
  templateUrl: 'repair-list.html',
})

export class RepairListPage extends BaseUI  {

  orderList: Array<any> = [];
  order: Object[] = [];
  RES_ROOT: string;
  navCtrl: any;
  status: string = 'orderUndoPage';
  sta: number = 0;
  pageNumber: any = 0;
  totalNumber: any;

  waitingOrder: number = 0;
  processingOrder: number = 0;
  completedOrder: number = 0;

  constructor(
    public app: App,
    public http: HttpService,
    public loadingCtrl: LoadingController,

  ) {

    super();
    let loading = super.showLoading(this.loadingCtrl);

    this.navCtrl = this.app.getRootNav();
    this.getListData(loading);
  }
  doInfinite(infiniteScroll) {
    if (this.pageNumber === this.totalNumber) {
      infiniteScroll.complete();
      infiniteScroll.enable(false);
      return false;
    }
    let loading = super.showLoading(this.loadingCtrl);
    this.getListData(loading, infiniteScroll);
  }
  getListData(loading, infiniteScroll: any = false) {
    let params = { method: "repair.findStoreRepairOrder", pageNumber: this.pageNumber + 1 };
    this.http.get(params).subscribe(res => {
      loading.dismiss();
      if (infiniteScroll) {
        infiniteScroll.complete();
      }
      if (!!res && res.responseCode == 167050) {
        res.responseObj.map(item => {
          if(item.status === 1) {
            this.waitingOrder++;
          }else if(item.status === 2){
            this.processingOrder++;
          }else if(item.status === 3){
            this.completedOrder++;
          }
          this.orderList.push(item);
        });
        this.totalNumber = this.totalNumber || res["totalNumber"];
        this.pageNumber = res["pageNumber"];
      };
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
