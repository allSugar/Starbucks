import { Component, ViewChild } from '@angular/core';
import { App, IonicPage, NavParams, Slides } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-index',
  templateUrl: 'store-index.html',
})
export class StoreIndexPage {

  @ViewChild(Slides) slides: Slides;
  navCtrl: any;
  storeInfoId: number;
  category: Object[] = [
    { url: 'repair_kits', name: '维修包', page: 'RepairKitsPage' },
    { url: 'cloud-smart', name: '云智能', page: 'CloudSmartPage' },
    { url: 'cloud', name: '云盘', page: 'CloudListPage' },
    { url: 'chart', name: '统计', page: 'ChartListPage' },
    { url: 'repair_place', name: '问题管理', page: 'RepairPointListPage' }
  ];

  constructor(
    public app: App,
    public navParams: NavParams
  ) {
    this.navCtrl = this.app.getRootNav();
  }

  goToOtherPage(item) {
    this.navCtrl.push(item.page ? item.page : item, {
      storeInfoId: this.storeInfoId
    });
  }

  ionViewDidLoad() {
    this.storeInfoId = this.navParams.get("storeInfoId");
    this.slides.autoplayDisableOnInteraction = false;
  }
}
