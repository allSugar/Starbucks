import { Component } from '@angular/core';
import { IonicPage, App, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-assign-repair',
  templateUrl: 'assign-repair.html',
})
export class AssignRepairPage {

  constructor(
    public app: App,
    public navParams: NavParams
  ) {
    this.navCtrl = this.app.getRootNav();
  }

  assignRepairMan() {
    this.navCtrl.push("AssignConactPage");
  }
}
