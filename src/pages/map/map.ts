import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()

@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})

export class MapPage {

  constructor() {}

  loadMap() {
      // this.map = new AMap.Map('container', {
      //     resizeEnable: true,
      //     zoom: 8,
      //     center: [116.39,39.9]
      // });
  }
}
