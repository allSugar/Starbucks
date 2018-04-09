import { Component } from '@angular/core';
import { IonicPage, App, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-order-conduct',
  templateUrl: 'order-conduct.html',
})
export class OrderConductPage {
  navCtrl: any;
  tabStatus:number= 0;
  constructor(
      public app: App,
      public navParams: NavParams
  ) {
    this.navCtrl = this.app.getRootNav();
  }

  tabs(i: number) {
    this.tabStatus = i;
  }

  goToOtherPage() {
    this.navCtrl.push('WorkerInfoPage');
  }
}
