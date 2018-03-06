import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

// declare var AMap;
declare var BMap;

@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {

  @ViewChild('container') mapElement: ElementRef;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }


  ionViewDidLoad() {
    
    // BMap 
    let map = new BMap.Map(this.mapElement.nativeElement);
    // 创建地图实例
    let point = new BMap.Point(116.404, 39.915);
    // 创建点坐标
    map.centerAndZoom(point, 11);

    // AMap
    // let map = new AMap.Map('container', {
    //   resizeEnable: true,
    //   zoom: 11,
    //   center: [116.397428, 39.90923]
    // });
  }
}
