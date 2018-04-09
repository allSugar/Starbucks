import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the OrderConductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-order-conduct',
  templateUrl: 'order-conduct.html',
})
export class OrderConductPage {

  tabStatus:number= 0;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  tabs(i: number) {
    this.tabStatus = i;
  }

}
