import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-repair-kits',
  templateUrl: 'repair-kits.html',
})
export class RepairKitsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  nav: object[] = [
      {name: '木材'},
      {name: '木材'},
      {name: '木材'},
      {name: '木材'},
      {name: '木材'}
  ];

  contain: object[] = [
      {name: '木材', list: [{title: '厨房吊灯欧普照明', count: '25', price: '780'},{title: '厨房吊灯欧普照明', count: '25', price: '780'},{title: '厨房吊灯欧普照明', count: '25', price: '780'},{title: '厨房吊灯欧普照明', count: '25', price: '780'}]},
      {name: '木材', list: [{title: '厨房吊灯欧普照明', count: '25', price: '780'},{title: '厨房吊灯欧普照明', count: '25', price: '780'},{title: '厨房吊灯欧普照明', count: '25', price: '780'},{title: '厨房吊灯欧普照明', count: '25', price: '780'}]},
      {name: '木材', list: [{title: '厨房吊灯欧普照明', count: '25', price: '780'},{title: '厨房吊灯欧普照明', count: '25', price: '780'},{title: '厨房吊灯欧普照明', count: '25', price: '780'},{title: '厨房吊灯欧普照明', count: '25', price: '780'}]},
      {name: '木材', list: [{title: '厨房吊灯欧普照明', count: '25', price: '780'},{title: '厨房吊灯欧普照明', count: '25', price: '780'},{title: '厨房吊灯欧普照明', count: '25', price: '780'},{title: '厨房吊灯欧普照明', count: '25', price: '780'}]},
      {name: '木材', list: [{title: '厨房吊灯欧普照明', count: '25', price: '780'},{title: '厨房吊灯欧普照明', count: '25', price: '780'},{title: '厨房吊灯欧普照明', count: '25', price: '780'},{title: '厨房吊灯欧普照明', count: '25', price: '780'}]}
  ];

}