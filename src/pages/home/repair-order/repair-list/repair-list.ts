import { Component } from '@angular/core';
import { IonicPage, App } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-repair-list',
  templateUrl: 'repair-list.html',
})
export class RepairListPage {

  navCtrl: any;
  status: number = 6;
  constructor(
    public app: App
  ) {
    this.navCtrl = this.app.getRootNav();
  }

  tabs(n: number) {
    this.status = n;
  }
  goToOtherPage(){
    this.navCtrl.push('RepairDetailPage');
  }
}
