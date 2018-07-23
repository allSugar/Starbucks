import { Component } from '@angular/core';
import { App, IonicPage, NavParams } from 'ionic-angular';

import { HttpService } from '../../../../../service/HttpService';

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

  constructor(
    public app: App,
    public navParams: NavParams,
    public http: HttpService
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
    let params = { method: "repair.findStoreRepairTemporaryBillList" };
    this.http.get(params).subscribe(res => {
      if (!!res && res.responseCode == 165030) {
        this.storeRepairTemporaryBillList = res.responseObj;
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
}
