import { Component } from '@angular/core';
import { IonicPage, App, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-order-done',
  templateUrl: 'order-done.html',
})
export class OrderDonePage {
  tabStatus: number = 0;
  navCtrl: any;
  constructor(
      public app: App,
      public navParams: NavParams
  ) {
    this.navCtrl = this.app.getRootNav();
  }

  tabs(i: number) {
    this.tabStatus = i;
  }

}
