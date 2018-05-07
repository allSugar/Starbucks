import { Component } from '@angular/core';
import { IonicPage, App, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-repaire-category',
  templateUrl: 'repaire-category.html',
})
export class RepaireCategoryPage {
  navCtrl: any;
  constructor(
    public app: App,
    public navParams: NavParams
  ) {
    this.navCtrl = this.app.getRootNav();
  }

  goToOtherPage() {
    this.navCtrl.push('CategoryDetailPage', { len: this.navParams.get('len') })
  }

}
