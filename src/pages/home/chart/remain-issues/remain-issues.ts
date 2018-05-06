import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-remain-issues',
  templateUrl: 'remain-issues.html',
})
export class RemainIssuesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  status: number = 0;
  tabs(n: number) {
    this.status = this.status == n ? 0 : n;
  }
}
