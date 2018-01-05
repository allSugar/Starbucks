import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// baidu map
declare var BMap;

@IonicPage()
@Component({
  selector: 'page-my',
  templateUrl: 'my.html',
})

export class MyPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    let map = new BMap.Map('container');

    // 创建地图实例
    let point = new BMap.Point(116.404, 39.915);
    map.centerAndZoom(point, 11);
    // 初始化地图， 设置中心点坐标和地图级别
  }
  testMap() {
    alert(JSON.stringify(BMap));
  }
}
