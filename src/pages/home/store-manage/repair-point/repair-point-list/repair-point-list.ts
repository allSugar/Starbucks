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
  storeInfoId: number;
  storeRepairTemporaryBillList: Array<any> = [];

  constructor(
    public app: App,
    public navParams: NavParams,
    public http: HttpService
  ) {
    this.navCtrl = this.app.getRootNav();
    this.storeInfoId = this.navParams.get("storeInfoId");
    this.getListData();
  }

  getListData() {
    let params = { method: "repair.findStoreRepairTemporaryBillList", clientId: '14a01fdab38b4bf3b93781e20aa3777b' };
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
  goToDetailPage(id) {
    this.navCtrl.push("ProblemDetailPage", {
      id: id
    });
  }
}
