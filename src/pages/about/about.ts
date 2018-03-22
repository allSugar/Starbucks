import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  category: any[] = [
    { url: 'repair-frequency', name: '维修频率' },
    { url: 'warranty-number', name: '报修次数' },
    { url: 'repair-maintain', name: '维修分类' },
    { url: 'easy-hart', name: '易损部位' },
    { url: 'weekly', name: '每周问题' },
    { url: 'efficiency', name: '厂商效率' },
    { url: 'reason', name: '物损原因' },
    { url: 'remains', name: '遗存问题' }
  ];
  constructor(public navCtrl: NavController) {

  }

}
