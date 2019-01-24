import { Component } from '@angular/core';
import { IonicPage, App, NavParams } from 'ionic-angular';

import { HttpService } from '@/../../src/service/HttpService';

/**
 * Generated class for the ReportTypePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-report-type',
  templateUrl: 'report-type.html',
})
export class ReportTypePage {

  navCtrl: any;
  storeInfoId: any;
  topClass: any;
  len: any;
  page: String = "ReportTypePage";
  RepairWarehouse: Object[];
  higherLevelId: any;
  lists: Object = {
    ids: '',
    names: []
  }

  constructor(
    public app: App,
    public navParams: NavParams,
    public http: HttpService
  ) {
    this.navCtrl = this.app.getRootNav();
    this.storeInfoId = this.navParams.get("storeInfoId");
    let topClass = this.navParams.get("topClass");
    this.topClass = topClass ? topClass : 1;
    let len = this.navParams.get("len");
    this.len = len ? len : 1;
    let lists = this.navParams.get('lists');
    this.lists = lists || this.lists;


    if (this.navParams.get("higherLevelId")) {
      this.higherLevelId = this.navParams.get("higherLevelId");
    }

    this.getRepairWarehouse();
  }

  getRepairWarehouse() {
    let params = {
      method: "repair.findStoreRepairWarehouseForPage",
      storeInfoId: this.storeInfoId,
      topClass: this.topClass,
      higherLevelId: ""
    };
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
    this.lists['names'][this.topClass - 1] = item.repairContent
    // this.lists['names'].push(item.repairContent);

    if (!item.hasSubset) {
      this.lists['ids'] = item.id;
      let len = this.navCtrl.getViews().length - this.len;
      this.navCtrl.remove(len, this.len - 1).then(res => {
        if (res) {
          this.navCtrl.getPrevious().data.type = this.lists
          this.navCtrl.pop();
        }
      })
      return false;
    }

    this.navCtrl.push(this.page, {
      len: this.len + 1,
      topClass: item.topClass + 1,
      higherLevelId: item.id,
      storeInfoId: this.storeInfoId,
      lists: this.lists
    });
  }

  ionViewWillEnter() {
    let names = this.lists['names']
    if (names.length !== this.topClass){
      names.splice(this.topClass)
    }
    // this.lists['names'].splice(this.topClass, 1)
  }
}
