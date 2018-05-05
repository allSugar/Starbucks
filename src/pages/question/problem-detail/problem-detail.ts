import { Component } from '@angular/core';
import { IonicPage, App, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-problem-detail',
  templateUrl: 'problem-detail.html',
})
export class ProblemDetailPage {
  navCtrl: any;
  constructor(
      public app: App,
      public navParams: NavParams
  ) {
    this.navCtrl = this.app.getRootNav();
  }

  goToOtherPage() {
    this.navCtrl.push('RepaireCategoryPage');
  }

}
