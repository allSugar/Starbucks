import { Component } from '@angular/core';
import { App, IonicPage, NavParams } from 'ionic-angular';

import { RepairOrder } from '../../untils';
import { RES_ROOT } from '@/../../src/providers/httpUrl';

/**
 * Generated class for the ReportDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-report-detail',
  templateUrl: 'report-detail.html',
})
export class ReportDetailPage {

  navCtrl: any;
  id: any;
  data: any = {
    orderItemList: []
  };
  RES_ROOT: string;

  constructor(
    public app: App,
    public navParams: NavParams,
    public order: RepairOrder
  ) {
    this.navCtrl = this.app.getRootNav();
    this.id = this.navParams.get("id");
    this.RES_ROOT = RES_ROOT;

    this.order.Init(this.id).then(res => {
      this.data = res;
      this.SetDefault()
      console.log(this)
    })
  }

  SetDefault() {
    let orderItemList = this.data.orderItemList
    if (this.data.orderItemList) {
      orderItemList.map(item => {
        this.InitTotalHourData(item)
        this.InitOrderItemTypes(item)
      })
    } else {
      this.data.orderItemList = []
    }
  }

  InitTotalHourData(self){
    if (self.maintenanceHours) {
      self.maintenanceHours = parseInt(self.maintenanceHours)
      this.data.totalHours = this.data.totalHours || 0;
      this.data.totalHours += self.maintenanceHours;
    }
  }
  InitOrderItemTypes(self){
    self.storeRepairOrderItemTypes.map(item => {
      item.name = item.printRepairWarehouse.replace(',',' > ')
    })
  }

  ionViewDidLoad() {
    let len = this.navCtrl.getViews().length;
    this.navCtrl.remove(len - 2, 1);
  }

}
