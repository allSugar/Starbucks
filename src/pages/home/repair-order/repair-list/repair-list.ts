import { Component } from '@angular/core';
import { IonicPage, App } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-repair-list',
  templateUrl: 'repair-list.html',
})
export class RepairListPage {

  navCtrl: any;
  status: string = 'orderUndoPage';
  constructor(
    public app: App
  ) {
    this.navCtrl = this.app.getRootNav();
  }

  tabs(name: string) {
    this.status = name;
  }

  goToOtherPage() {
    this.navCtrl.push(this.status);
  }

}
