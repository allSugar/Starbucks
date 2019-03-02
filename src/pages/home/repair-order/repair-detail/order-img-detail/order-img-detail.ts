import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';

import { RES_ROOT } from '@/../../src/providers/httpUrl';

@IonicPage()
@Component({
  selector: 'page-order-img-detail',
  templateUrl: 'order-img-detail.html',
})
export class OrderImgDetailPage {

  data: any = [];
  RES_ROOT:any;
  constructor(
    public navParams: NavParams,
  ) {
    this.RES_ROOT = RES_ROOT;
    this.data = this.navParams.get('data');
    console.log(this)
  }
}
