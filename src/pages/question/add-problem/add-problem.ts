import { Component } from '@angular/core';
import { IonicPage, App, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-add-problem',
  templateUrl: 'add-problem.html',
})
export class AddProblemPage {

  navCtrl: any;
  constructor(
    public app: App,
    public navParams: NavParams
  ) {
    this.navCtrl = this.app.getRootNav()
  }

  goToOtherPage() {
    this.navCtrl.push("ProblemDetailPage");
  }

}
