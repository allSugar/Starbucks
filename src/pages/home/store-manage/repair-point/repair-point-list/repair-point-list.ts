import { Component } from '@angular/core';
import { App, IonicPage, NavParams } from 'ionic-angular';

import { HttpService } from '../../../../../service/HttpService';
import { ToastService } from '../../../../../service/ToastService';

@IonicPage()
@Component({
  selector: 'page-repair-point-list',
  templateUrl: 'repair-point-list.html',
})
export class RepairPointListPage {

  navCtrl: any;
  menuStatus: Boolean = false;
  drawingList: any;
  storeInfoId: number;
  storeRepairTemporaryBillList: Array<any> = [];
  srtbIds: Array<any> = [];
  checkAll: Boolean = false;

  constructor(
    public app: App,
    public navParams: NavParams,
    public http: HttpService,
    private toast: ToastService
  ) {
    this.navCtrl = this.app.getRootNav();
    this.storeInfoId = this.navParams.get("storeInfoId");
    this.drawingList = this.navParams.get("drawingList");
    if (!this.drawingList) {
      this.getDrawingList();
    }
    this.getListData();

  }

  toggleMenu() {
    this.menuStatus = !this.menuStatus;
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
  getListData() {
    let params = { method: "repair.findStoreRepairTemporaryBillList", storeInfoId: this.storeInfoId };
    this.http.get(params).subscribe(res => {
      if (!!res && res.responseCode == 165030) {
        res.responseObj.map(item => {
          let obj = this.drawingList.filter(self => {
            if (item.point) {
              return item.point.drawingId === self.id;
            }
          });
          if (obj.length) {
            item.drawing = obj[0].dataContent;
          }
        });
        this.storeRepairTemporaryBillList = res.responseObj;
        this.checkAll = (this.srtbIds.length === this.storeRepairTemporaryBillList.length);
      };
    }, error => {

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
    console.log(this.srtbIds);
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
    console.log(this.srtbIds);
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
      console.log(res);
      this.getListData();
    }, error => {

    });
  }
}
