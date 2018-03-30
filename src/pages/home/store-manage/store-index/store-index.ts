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
  category: Object[] = [
    { url: 'repair_kits', name: '维修单'},
    { url: 'cloud-smart', name: '云智能' },
    { url: 'cloud', name: '云盘', page: 'CloudListPage' },
    { url: 'chart', name: '统计', page: 'ChartListPage' },
    { url: 'repair_place', name: '维修点管理', page: 'RepairPointListPage' }
  ];

  constructor(
    public app: App,
    public navParams: NavParams
  ) {
    this.navCtrl = this.app.getRootNav();
  }

  goToOtherPage(item) {
    if (item.page) this.navCtrl.push(item.page);
  }

  ionViewDidLoad() {
    this.slides.autoplayDisableOnInteraction = false;
  }
}
