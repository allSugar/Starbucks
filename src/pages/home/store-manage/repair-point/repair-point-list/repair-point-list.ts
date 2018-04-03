import { Component } from '@angular/core';
import { App, IonicPage, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-repair-point-list',
  templateUrl: 'repair-point-list.html',
})
export class RepairPointListPage {

  navCtrl:any;
  constructor(
    public app: App,
    public navParams: NavParams
  ) {
    this.navCtrl = this.app.getRootNav();
  }

  goToOtherPage() {
    this.navCtrl.push('DrawingMapPage');
  }

}
