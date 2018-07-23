import { Component } from '@angular/core';
import { IonicPage, App, NavParams } from 'ionic-angular';

import { HttpService } from '../../../service/HttpService';

@IonicPage()
@Component({
  selector: 'page-repaire-category',
  templateUrl: 'repaire-category.html',
})

export class RepaireCategoryPage {

  navCtrl: any;
  storeInfoId: any;
  Point: any;
  topClass: any;
  len: any;
  page: String = "RepaireCategoryPage";
  RepairWarehouse: Object[];
  higherLevelId: any;
  problem: any = {
    method: "repair.saveStoreRepairTemporaryBill",
    faultPointPaths: "1",
    faultDesPaths: "1"
  };

  constructor(
    public app: App,
    public navParams: NavParams,
    public http: HttpService
  ) {
    this.navCtrl = this.app.getRootNav();
    this.Point = this.navParams.get("Point");
    this.storeInfoId = this.navParams.get("storeInfoId");
    let topClass = this.navParams.get("topClass");
    this.topClass = topClass ? topClass : 1;
    this.len = this.navParams.get("len");
    this.problem = this.navParams.get("problem") || this.problem;
    this.problem.storeInfoId = this.storeInfoId ? this.storeInfoId : (this.Point.storeInfoId ? this.Point.storeInfoId : 1);

    if (this.navParams.get("higherLevelId")) {
      this.higherLevelId = this.navParams.get("higherLevelId");
    }

    this.getRepairWarehouse();
  }

  getRepairWarehouse() {
    let params = { method: "repair.findStoreRepairWarehouseForPage", storeInfoId: this.problem.storeInfoId, topClass: this.topClass, higherLevelId: "" };
    if (this.higherLevelId) {
      params.higherLevelId = this.higherLevelId;
    } else {
      delete params.higherLevelId;
    }
    this.http.get(params).subscribe(res => {
      if (!!res && res.responseCode == 164030 && res.responseObj.length) {
        this.RepairWarehouse = res.responseObj;
      }
    }, error => {

    });
  }
  goToOtherPage(item) {
    if (!item.hasSubset) {
      this.page = "EmergencyLevelPage";
    }
    // 
    this.problem.faultDes = this.problem.faultDes || "";
    this.problem.faultDes += (item.repairContent + "/");
    this.problem.storeRepairWarehouseId = item.storeRepairWarehouseId;
    this.navCtrl.push(this.page, { len: this.len + 1, topClass: item.topClass + 1, higherLevelId: item.id, problem: this.problem, Point: this.Point });
  }
}
