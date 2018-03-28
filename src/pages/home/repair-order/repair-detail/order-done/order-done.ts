import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-order-done',
  templateUrl: 'order-done.html',
})
export class OrderDonePage {
  tabStatus: number = 0;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  tabs(i: number) {
    this.tabStatus = i;
  }
}
