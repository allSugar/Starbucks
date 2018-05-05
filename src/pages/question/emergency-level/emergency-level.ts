import { Component } from '@angular/core';
import { IonicPage, App, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-emergency-level',
  templateUrl: 'emergency-level.html',
})
export class EmergencyLevelPage {
  status: any = true;
  navCtrl: any;
  constructor(
    public app: App,
    public navParams: NavParams
  ) {
    this.navCtrl = this.app.getRootNav();
  }
  
  rowStatusChange(name) {
    this.navCtrl.push(name)
  }

}
