import { Component, ViewChild } from '@angular/core';
import { App, IonicPage, NavParams, Slides } from 'ionic-angular';

import { HttpService } from '../../../../service/HttpService';

@IonicPage()
@Component({
  selector: 'page-index',
  templateUrl: 'store-index.html',
})
export class StoreIndexPage {

  @ViewChild(Slides) slides: Slides;
  navCtrl: any;
  menuStatus: Boolean = false;
  storeInfoId: any;
  drawingList: any;
  category: Object[] = [
    { url: 'repair_kits', name: '维修包', page: 'RepairKitsPage' },
    { url: 'cloud-smart', name: '云智能', page: 'CloudSmartPage' },
    { url: 'cloud', name: '云盘', page: 'CloudListPage' },
    { url: 'chart', name: '统计', page: 'ChartListPage' },
    { url: 'repair_place', name: '问题管理', page: 'RepairPointListPage' }
  ];


  constructor(
    public app: App,
    public navParams: NavParams,
    public http: HttpService
  ) {
    this.storeInfoId = this.navParams.get("storeInfoId");
    this.navCtrl = this.app.getRootNav();
    this.getDrawingList();
  }

  toggleMenu() {
    this.menuStatus = !this.menuStatus;
  }

  getDrawingList() {
    let params = { method: "store.findStoreCompletionData", storeInfoId: this.storeInfoId ? this.storeInfoId : 1 };
    this.http.get(params).subscribe(res => {
      if (!!res && res.responseCode == 161030) {
        let Lists = res.responseObj;
        this.drawingList = Lists.filter(item => {
          return item.hasSubset === 0;
        });
      }
    }, error => {

    });
  }

  goToOtherPage(item, self) {
    let obj = {
      storeInfoId: this.storeInfoId ? this.storeInfoId : 1,
      drawingId: self ? self.id : "",
      drawingList: ""
    };

    if (item.page && item.page === "RepairPointListPage") {
      obj.drawingList = this.drawingList;
    }
    this.menuStatus = false;
    this.navCtrl.push(item.page ? item.page : item, obj);
  }

  ionViewDidEnter() {
    this.menuStatus = false;
  }

  ionViewDidLoad() {
    this.slides.autoplayDisableOnInteraction = false;
  }
}
