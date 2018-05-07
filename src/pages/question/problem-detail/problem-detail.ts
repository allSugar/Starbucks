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
    if (this.navParams.get('remove')) {
      let len = this.navParams.get('len'),
      startIndex = this.navCtrl.getViews().length - len;
      this.navCtrl.remove(startIndex, len);
    }
  }

  goToOtherPage() {
    this.navCtrl.push('RepaireCategoryPage');
  }

}
