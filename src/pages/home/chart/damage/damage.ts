import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-damage',
  templateUrl: 'damage.html',
})
export class DamagePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
    damage: any[] = [
        {url: 'problem_1', num: '12', name: '设计缺陷'},
        {url: 'problem_2', num: '12', name: '施工缺陷'},
        {url: 'problem_3', num: '12', name: '自然损耗'},
        {url: 'problem_4', num: '12', name: '使用不当'},
        {url: 'problem_5', num: '12', name: '质量问题'},
        {url: 'problem_6', num: '12', name: '其他原因'}
    ];
}
