import { Component } from '@angular/core';
import { NavController, NavParams, App } from 'ionic-angular';

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

  goAlphaScroll() {
    this.app.getRootNav().push('AlphaListPage', {
      id: "4",
      name: "AlphaScroll"
    });
  }

  goCard() {
    this.app.getRootNav().push('CardPage', {
      id: "5",
      name: "CardPage"
    });
  }

  ionViewDidLoad() {

  }
}
