import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-efficiency',
  templateUrl: 'efficiency.html',
})
export class EfficiencyPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  status: number = 0;
  tabs(n: number) {
    this.status = n;
  }
}
