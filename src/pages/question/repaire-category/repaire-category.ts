import { Component } from '@angular/core';
import { IonicPage, App, NavParams } from 'ionic-angular';

import { HttpService } from '../../../service/HttpService';

@IonicPage()
@Component({
  selector: 'page-repaire-category',
  templateUrl: 'repaire-category.html',
})
// repair.findStoreRepairWarehouseForPage  维修库列表  11-25
export class RepaireCategoryPage {

  navCtrl: any;
  storeInfoId: Number;
  topClass: any;
  len: any;
  page: String = "CategoryDetailPage";
  RepairWarehouse: Object[];

  constructor(
    public app: App,
    public navParams: NavParams,
    public http: HttpService
  ) {
    this.navCtrl = this.app.getRootNav();
    this.storeInfoId = this.navParams.get("storeInfoId");
    let topClass = this.navParams.get("topClass");
    this.topClass = topClass ? topClass : 1;
    this.len = this.navParams.get('len');

    this.getRepairWarehouse();
  }

  getRepairWarehouse() {
    let params = { method: "repair.findStoreRepairWarehouseForPage", storeInfoId: this.storeInfoId ? this.storeInfoId : 1, topClass: this.topClass };
    this.http.get(params).subscribe(res => {
      if (!!res && res.responseCode == 164030 && res.responseObj.length) {
        this.RepairWarehouse = res.responseObj;
      }
    }, error => {

    });
  }
  goToOtherPage() {
    this.navCtrl.push(this.page, { len: this.len, topClass: this.topClass + 1 })
  }

}
