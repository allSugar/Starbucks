import { Component } from '@angular/core';
import { IonicPage, App, NavParams } from 'ionic-angular';
import { HomePage } from '../../../home/index/index';

@IonicPage()
@Component({
  selector: 'page-manage',
  templateUrl: 'store-list.html',
})
export class StoreManageListPage {
  shop: Object[] = [
    { url: 'change-before', title: '钟楼百货星巴克' },
    { url: 'change-before', title: '钟楼百货星巴克' },
    { url: 'change-before', title: '钟楼百货星巴克' },
    { url: 'change-before', title: '钟楼百货星巴克' },
    { url: 'change-before', title: '钟楼百货星巴克' }
  ];
  navCtrl: any;
  constructor(
    public navParams: NavParams,
    public app: App
  ) {
    this.navCtrl = this.app.getRootNav();
  }

  goToOtherPage(item) {
    this.navCtrl.push(HomePage);
  }
  status: number;
  tabs(n: number) {
    this.status = n;
  }
}
