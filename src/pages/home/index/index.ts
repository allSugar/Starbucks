import { Component, ViewChild } from '@angular/core';
import { App, NavParams, Slides } from 'ionic-angular';

@Component({
  selector: 'page-index',
  templateUrl: 'index.html'
})
export class HomePage {

  @ViewChild(Slides) slides: Slides;
  navCtrl: any;
  category: Object[] = [
    { url: 'repair-order', name: '维修单' },
    { url: 'cloud-smart', name: '云智能' },
    { url: 'cloud', name: '云盘' },
    { url: '3D-panorama', name: '3D全景' },
    { url: 'store-manage', name: '店面管理' },
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
