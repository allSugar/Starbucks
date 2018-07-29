import { Component } from '@angular/core';
import { IonicPage, App, NavParams } from 'ionic-angular';

import { HttpService } from '../../../service/HttpService';

@IonicPage()
@Component({
  selector: 'page-problem-detail',
  templateUrl: 'problem-detail.html',
})
export class ProblemDetailPage {

  navCtrl: any;
  detailData: Object = [];
  pointId: any;
  storeInfoId: any;
  problem: any;

  constructor(
    public app: App,
    public navParams: NavParams,
    public http: HttpService
  ) {
    this.navCtrl = this.app.getRootNav();
    if (this.navParams.get("pointId")) {
      this.pointId = this.navParams.get("pointId");
      this.storeInfoId = this.navParams.get("storeInfoId");
    }
    if (this.navParams.get('remove')) {
      let len = this.navParams.get('len'),
        startIndex = this.navCtrl.getViews().length - len;
      this.navCtrl.remove(startIndex, len);
    }
    this.getListData();
  }

  getListData() {
    let params = { method: "repair.findStoreRepairTemporaryBillList", storeInfoId: this.storeInfoId, pointId: this.pointId };
    this.http.get(params).subscribe(res => {
      if (!!res && res.responseCode == 165030) {
        this.detailData = res.responseObj;
      };
    }, error => {

    });
  }
  goToOtherPage() {
    this.navCtrl.push('RepaireCategoryPage', { len: 2, storeInfoId: this.storeInfoId });
  }

}
