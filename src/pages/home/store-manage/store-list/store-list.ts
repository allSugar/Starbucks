import { Component } from '@angular/core';
import { IonicPage, App, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-manage',
  templateUrl: 'store-list.html',
})
export class StoreManageListPage {
  shop: Object[] = [
    { url: 'change-before', title: '钟楼百货星巴克', page: 'CloudListPage' },
    { url: 'change-before', title: '钟楼百货星巴克', page: 'HomePage' },
    { url: 'change-before', title: '钟楼百货星巴克', page: 'HomePage' },
    { url: 'change-before', title: '钟楼百货星巴克', page: 'HomePage' },
    { url: 'change-before', title: '钟楼百货星巴克', page: 'HomePage' }
  ];
  navCtrl: any;
  constructor(
    public navParams: NavParams,
    public app: App
  ) {
    this.navCtrl = this.app.getRootNav();
  }

  goToOtherPage(item) {
    if (item.page) this.navCtrl.push(item.page);
  }
  status: number;
  tabs(n: number) {
    this.status = n;
  }
}
