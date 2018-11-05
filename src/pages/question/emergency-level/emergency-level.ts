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
  len: any;
  problem: any;
  Point: any;
  emergency: Number;
  page: String = "AddProblemPage";

  constructor(
    public app: App,
    public navParams: NavParams
  ) {
    this.problem = this.navParams.get("problem");
    this.Point = this.navParams.get("Point");
    this.len = this.navParams.get("len");
    this.navCtrl = this.app.getRootNav();
  }

  rowStatusChange(value) {
    if (value) {
      this.navCtrl.push(this.page, { len: this.len + 1, problem: this.problem, Point: this.Point })
    }
  }
  ionViewDidEnter() {
    this.problem.emergency = 0;
  }
}
