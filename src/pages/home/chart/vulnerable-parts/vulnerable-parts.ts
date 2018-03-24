import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-vulnerable-parts',
  templateUrl: 'vulnerable-parts.html',
})
export class VulnerablePartsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VulnerablePartsPage');
  }

}
