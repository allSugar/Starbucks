import { Component, ViewChild } from '@angular/core';
import { IonicPage, App, LoadingController, NavParams, Content } from 'ionic-angular';


import { BaseUI } from '@/../../src/directives/comm/baseui';
import { HttpService } from '@/../../src/service/HttpService';
@IonicPage()
@Component({
  selector: 'page-repair-list',
  templateUrl: 'repair-list.html',
})

export class RepairListPage extends BaseUI {

  @ViewChild(Content) content: Content;

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

  paramsStatus: Array<any> = [1, 2, 3];

  infiniteScroll: any;

  menuStatus: Boolean = false;

  constructor(
    public app: App,
    public navParams: NavParams,
    public http: HttpService,
    public loadingCtrl: LoadingController,
  ) {
    super();
    this.navCtrl = this.app.getRootNav();

    if (this.navParams.get('remove')) {
      let len = this.navParams.get('len'),
        startIndex = this.navCtrl.getViews().length - len;
      this.navCtrl.remove(startIndex, len);
    }

    let loading = super.showLoading(this.loadingCtrl);
    this.getListData(loading);
  }

  toggleMenu() {
    this.menuStatus = !this.menuStatus;
  }

  doInfinite(infiniteScroll) {
    this.infiniteScroll = this.infiniteScroll || infiniteScroll;
    if (this.pageNumber === this.totalNumber) {
      infiniteScroll.complete();
      infiniteScroll.enable(false);
      return false;
    }
    let loading = super.showLoading(this.loadingCtrl);
    this.getListData(loading, infiniteScroll);
  }

  getListData(loading, infiniteScroll: any = false) {
    let params = { method: "repair.findStoreRepairOrder", statuss: String(this.paramsStatus), pageNumber: this.pageNumber + 1 };
    this.http.get(params).subscribe(res => {
      loading.dismiss();
      if (infiniteScroll) {
        infiniteScroll.complete();
      }
      if (!!res && res.responseCode == 167050) {
        if (params.statuss == "1,2,3") {
          this.waitingOrder = res.totalSize;
        } else if (params.statuss == "4,5,6,7") {
          this.processingOrder = res.totalSize;
        } else if (params.statuss == "8,9") {
          this.completedOrder = res.totalSize;
        }
        this.orderList = this.orderList.concat(res.responseObj);
        this.totalNumber = this.totalNumber || res["totalNumber"];
        this.pageNumber = res["pageNumber"];
        if (
          this.pageNumber === 1 &&
          res["totalNumber"] > 1 &&
          this.infiniteScroll) {
          this.infiniteScroll.enable(true);
        }
      };
    });
  }

  tabs(name: string) {
    if (this.status === name) {
      return false;
    }
    this.content.scrollToTop();
    this.orderList = [];
    this.pageNumber = 0;
    this.status = name;
    this.sta = 0;

    if (name === "orderUndoPage") {
      this.paramsStatus = [1, 2, 3];
    } else if (name === "OrderConductPage") {
      this.paramsStatus = [4, 5, 6, 7];
    } else {
      this.paramsStatus = [8, 9];
    }

    let loading = super.showLoading(this.loadingCtrl);
    this.getListData(loading);
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
  changeActive(i: Number) {
    this.oindex = i;
    this.sta = 0;
  }

  sliderData:object[] = [
    {label: '不限', status: false},
    {label: '商场', status: true},
    {label: '影院', status: false},
    {label: '酒店', status: false},
    {label: '超市', status: false},
    {label: '铁路', status: false},
    {label: '福利院', status: false},
    {label: '养生馆', status: false},
    {label: '酒吧', status: false}
  ];
  tabsActive($index){
    this.sliderData.forEach(function (n,i) {
      n.status = false;
      i == $index ? n.status = true : '';
    });
  }
  sort: object[] = [
    { filter: '全部' },
    { filter: '厂商名字a-z' },
    { filter: '厂商名字z-a' },
    { filter: '问题由多到少' },
    { filter: '问题由少到多' }
  ];
  mode: object[] = [
    { filter: '紧急' },
    { filter: '一般' }
  ];
  shop: object[] = [
    { filter: '苏南方圆' },
    { filter: '星巴克' },
    { filter: '苏南方圆' },
    { filter: '星巴克' },
    { filter: '苏南方圆' }
  ];
  date: object[] = [
    { filter: '日期' },
    { filter: '昨天' },
    { filter: '今天' },
    { filter: '前天' }
  ];


}
