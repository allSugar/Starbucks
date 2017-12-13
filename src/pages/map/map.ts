import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {

  constructor(public map: any,public navCtrl: NavController, public navParams: NavParams) {
  }
  loadMap() {
      this.map = new AMap.Map('container', {
          resizeEnable: true,
          zoom: 8,
          center: [116.39,39.9]
      });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MapPage');
  }

}
