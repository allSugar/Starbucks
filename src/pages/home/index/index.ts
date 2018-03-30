import { Component, ViewChild } from '@angular/core';
import { App, IonicPage, NavParams, Slides } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-index',
  templateUrl: 'index.html'
})
export class HomePage {

  @ViewChild(Slides) slides: Slides;
  navCtrl: any;
  category: Object[] = [
    { url: 'repair-order', name: '维修单', page: 'RepairListPage' },
    { url: 'cloud-smart', name: '云智能', page: 'CloudSmartPage'},
    { url: 'cloud', name: '云盘', page: 'CloudListPage' },
    { url: '3D-panorama', name: '3D全景', page: 'PanoramaListPage' },
    { url: 'store-manage', name: '店面管理', page: 'StoreManageListPage' },
    { url: 'chart', name: '统计', page: 'ChartListPage' }
  ];

  constructor(
    public navParams: NavParams,
    public app: App
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
