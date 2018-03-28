import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-page-tmpl',
  templateUrl: 'page-tmpl.html',
})
export class PageTmplPage {

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



    import: any[] = [
        {url: 'import_img1'},
        {url: 'import_img2'},
        {url: 'import_img3'},
        {url: 'import_img4'},
        {url: 'import_img5'},
        {url: 'import_img6'}
    ];

  constructor(public navCtrl: NavController) {

  }

}
