import { Component } from '@angular/core';
import { IonicPage, App, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-news-list',
  templateUrl: 'news-list.html',
})
export class NewsListPage {
  navCtrl: any;
  constructor(
    public app: App,
    public navParams: NavParams
  ) {
    this.navCtrl = this.app.getRootNav();
  }
  goToOtherPage(item) {
    if (item.page) this.navCtrl.push(item.page, { status: item.status });
  }
  news: Object[] = [
    { url: 'icon_order', name: '新单', page: 'NewsDetailPage', status: '1' },
    { url: 'icon_success', name: '已完成', page: 'NewsDetailPage', status: '2' },
    { url: 'icon_message', name: '群消息', page: 'NewsDetailPage', status: '3' }
  ];


}
