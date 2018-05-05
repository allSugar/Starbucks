import { Component } from '@angular/core';
import { App, IonicPage, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-repair-point-list',
  templateUrl: 'repair-point-list.html',
})
export class RepairPointListPage {

  navCtrl: any;
  lists: Array<any> = [
    {
      status: false,
      content: [1, 2]
    },
    {
      status: false,
      content: [1, 2]
    },
    {
      status: false
    },
    {
      status: false,
      content: []
    }
  ];
  constructor(
    public app: App,
    public navParams: NavParams
  ) {
    this.navCtrl = this.app.getRootNav();
  }

  goToOtherPage(name) {
    this.navCtrl.push(name);
  }
  goToDetailPage() {
    this.navCtrl.push("ProblemDetailPage");
  }
}
