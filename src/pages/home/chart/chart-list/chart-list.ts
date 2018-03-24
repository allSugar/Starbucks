import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ChartListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chart-list',
  templateUrl: 'chart-list.html',
})
export class ChartListPage {

  category: Object[] = [
    { url: 'repair-frequency', name: '维修频率' },
    { url: 'warranty-number', name: '报修次数' },
    { url: 'repair-maintain', name: '维修分类' },
    { url: 'easy-hart', name: '易损部位' },
    { url: 'weekly', name: '每周问题' },
    { url: 'efficiency', name: '厂商效率' },
    { url: 'reason', name: '物损原因' },
    { url: 'remains', name: '遗存问题' }
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
}
