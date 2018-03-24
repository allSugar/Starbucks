import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

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

    problem: any[] = [
        {url: 'problem_1', num: '12', name: '设计缺陷'},
        {url: 'problem_2', num: '12', name: '施工缺陷'},
        {url: 'problem_3', num: '12', name: '自然损耗'},
        {url: 'problem_4', num: '12', name: '使用不当'},
        {url: 'problem_5', num: '12', name: '质量问题'},
        {url: 'problem_6', num: '12', name: '其他原因'}
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
