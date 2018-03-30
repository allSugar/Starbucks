import { Component } from '@angular/core';
import { IonicPage, App, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-damage-index',
  templateUrl: 'damage-index.html',
})
export class DamageIndexPage {
    navCtrl: any;
  constructor(
      public app: App,
      public navParams: NavParams
  ) {
      this.navCtrl = this.app.getRootNav();
  }
  goToOtherPage(item) {
      if(item.page) this.navCtrl.push(item.page);
  }
    damage: any[] = [
        {url: 'problem_1', num: '12', name: '设计缺陷', page: 'DesignDefectPage'},
        {url: 'problem_2', num: '12', name: '施工缺陷'},
        {url: 'problem_3', num: '12', name: '自然损耗'},
        {url: 'problem_4', num: '12', name: '使用不当'},
        {url: 'problem_5', num: '12', name: '质量问题'},
        {url: 'problem_6', num: '12', name: '其他原因'}
    ];
}
