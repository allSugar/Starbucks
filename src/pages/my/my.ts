import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';

/**
 * Generated class for the MyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// baidu map

@Component({
  selector: 'page-my',
  templateUrl: 'my.html',
})

export class MyPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private app: App
  ) {
  }

  goMap() {
    this.app.getRootNav().push('MapPage', {
      id: "1",
      name: "map"
    });
  }

  goChart() {
    this.app.getRootNav().push('ChartPage', {
      id: "2",
      name: "chart"
    });
  }

  goSlide() {
    this.app.getRootNav().push('SlidePage', {
      id: "3",
      name: "slide"
    });
  }

  ionViewDidLoad() {

  }
}
