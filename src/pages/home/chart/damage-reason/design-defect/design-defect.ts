import { Component } from '@angular/core';
import { IonicPage, App, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-design-defect',
  templateUrl: 'design-defect.html',
})
export class DesignDefectPage {
  navCtrl: any;
  constructor(
      public app: App,
      public navParams: NavParams
  ) {
    this.navCtrl = this.app.getRootNav();
  }
  goToOtherPage () {
    this.navCtrl.push('StoreInformationPage');
  }


}
