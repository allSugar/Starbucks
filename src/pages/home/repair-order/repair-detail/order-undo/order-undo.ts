import { Component } from '@angular/core';
import { IonicPage, App, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-order-undo',
  templateUrl: 'order-undo.html',
})
export class orderUndoPage {
  data: any;
  navCtrl: any;
  constructor(
      public app: App,
      public navParams: NavParams
  ) {
    this.navCtrl = this.app.getRootNav();
    this.data = navParams.get('data');
  }
  goToOtherPage(name:string){
    this.navCtrl.push(name);
  }

  goToDetailPage (name) {
    this.navCtrl.push(name);
  }

}
