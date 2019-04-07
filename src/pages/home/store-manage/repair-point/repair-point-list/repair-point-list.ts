import { Component, ViewChild } from '@angular/core';
import { App, IonicPage, NavParams, LoadingController, Content } from 'ionic-angular';

import { BaseUI } from '@/../../src/directives/comm/baseui';
import { HttpService } from '@/../../src/service/HttpService';
import { ToastService } from '@/../../src/service/ToastService';

@IonicPage()
@Component({
  selector: 'page-repair-point-list',
  templateUrl: 'repair-point-list.html',
})
export class RepairPointListPage extends BaseUI {

  @ViewChild(Content) content: Content;

  navCtrl: any;
  menuStatus: Boolean = false;
  drawingList: any;
  storeInfoId: number;
  storeRepairTemporaryBillList: Array<any> = [];
  srtbIds: Array<any> = [];
  checkAll: Boolean = false;
  pageNumber: any = 0;
  totalNumber: any;
  loading: any;
  infiniteScroll: any;
  searchStatus: Boolean = false;
  params: any = {
    method: "repair.findStoreRepairTemporaryBillList",
    storeInfoId: '',
    pageNumber: 0,
    keyWords: ''
  }

  constructor(
    public app: App,
    public navParams: NavParams,
    public http: HttpService,
    private toast: ToastService,
    public loadingCtrl: LoadingController,
  ) {
    super();
    let loading = super.showLoading(this.loadingCtrl);

    this.navCtrl = this.app.getRootNav();
    this.storeInfoId = this.navParams.get("storeInfoId");

    this.params.storeInfoId = this.storeInfoId;

    this.drawingList = this.navParams.get("drawingList");
    if (!this.drawingList) {
      this.getDrawingList();
    }

    this.getListData(loading);
  }

  SetList() {
    if (this.content && this.content.scrollToTop) {
      this.content.scrollToTop();
    }

    let loading = super.showLoading(this.loadingCtrl);
    this.pageNumber = 0;
    this.totalNumber = 0;
    this.storeRepairTemporaryBillList = [];
    this.checkAll = false;
    this.getListData(loading);
  }

  toggleMenu() {
    this.menuStatus = !this.menuStatus;
  }

  toggleSearch() {
    this.searchStatus = !this.searchStatus
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

  getDrawingList() {
    let params = { method: "store.findStoreCompletionData", storeInfoId: this.storeInfoId ? this.storeInfoId : 1 };
    this.http.get(params).subscribe(res => {
      if (!!res && res.responseCode == 161030) {
        this.drawingList = res.responseObj;
      }
    }, error => {

    });
  }

  getListData(loading, infiniteScroll: any = false) {
    this.params.pageNumber = this.pageNumber + 1;
    if (this.params.pageNumber > this.totalNumber) {
      return false
    }

    this.http.get(this.params).subscribe(res => {
      loading.dismiss();
      if (infiniteScroll) {
        infiniteScroll.complete();
      }
      if (!!res && res.responseCode == 165030) {
        this.totalNumber = this.totalNumber || res["totalNumber"];
        this.pageNumber = res["pageNumber"];
        res.responseObj.map(item => {
          this.storeRepairTemporaryBillList.push(item);
          let obj = this.drawingList.filter(self => {
            if (item.point) {
              return item.point.drawingId === self.id;
            }
          });
          if (obj.length) {
            item.drawing = obj[0].dataContent;
          }
        });


        this.checkAll = (this.srtbIds.length === this.storeRepairTemporaryBillList.length);

        if (
          this.pageNumber === 1 &&
          this.totalNumber > 1 &&
          this.infiniteScroll) {
          this.infiniteScroll.enable(true);
        }
      };
    });
  }

  goToOtherPage(name) {
    this.navCtrl.push(name);
  }

  goToDrawingPage(item) {
    let obj = {
      storeInfoId: this.storeInfoId ? this.storeInfoId : 1,
      drawingId: item ? item.id : "",
    };
    this.menuStatus = false;
    this.navCtrl.push("DrawingMapPage", obj);
  }

  goToDetailPage(pointId) {
    this.navCtrl.push("ProblemDetailPage", {
      pointId: pointId,
      storeInfoId: this.storeInfoId
    });
  }

  HandleChange(item) {
    if (item.status) {
      this.srtbIds.push(item.id);
    } else {
      this.srtbIds.map((id, index) => {
        if (id === item.id) {
          this.srtbIds.splice(index, 1);
        }
      });
    }
    this.checkAll = (this.srtbIds.length === this.storeRepairTemporaryBillList.length);
  }

  HandleCheckAllChange(event) {
    let status = event.target.checked;
    this.srtbIds = [];

    this.storeRepairTemporaryBillList.map(item => {
      item.status = status;
      if (status) {
        this.srtbIds.push(item.id);
      }
    });
  }
  // 　创建门店维修单  repair.createStoreRepairOrder
  onSumbit() {
    if (!this.srtbIds.length) {
      this.toast.info("请选择问题然后提交！");
      return false;
    }

    let params = { method: "repair.createStoreRepairOrder", storeInfoId: this.storeInfoId, srtbIds: "" };

    this.srtbIds.map((id, index) => {
      params.srtbIds += (index ? "," : "") + id;
    });

    this.http.get(params).subscribe(res => {
      if (res.responseCode == "167010") {
        this.SetList();
      } else {
        this.toast.info("创建订单失败，请稍后再试！");
      }
    });
  }

  HandleSearch() {
    this.storeRepairTemporaryBillList = [];
    this.pageNumber = 0;
    let loading = super.showLoading(this.loadingCtrl);
    this.getListData(loading);
  }
}
