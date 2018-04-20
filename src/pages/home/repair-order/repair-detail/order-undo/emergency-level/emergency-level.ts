import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-emergency-level',
  templateUrl: 'emergency-level.html',
})
export class EmergencyLevelPage {
  status: any = true;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

    change() {
        console.log("change");
    }

}
