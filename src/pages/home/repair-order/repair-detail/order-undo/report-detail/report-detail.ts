import { Component } from '@angular/core';
import { App, IonicPage, NavParams } from 'ionic-angular';

/**
 * Generated class for the ReportDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-report-detail',
  templateUrl: 'report-detail.html',
})
export class ReportDetailPage {

  navCtrl: any;

  constructor(
    public app: App,
    public navParams: NavParams
  ) {
    this.navCtrl = this.app.getRootNav();
  }

  ionViewDidLoad() {
    let len = this.navCtrl.getViews().length;
    this.navCtrl.remove(len - 2, 1);
  }

}
