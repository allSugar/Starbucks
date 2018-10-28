import { Component } from '@angular/core';
import { IonicPage, App } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-assign-material',
  templateUrl: 'assign-material.html',
})
export class AssignMaterialPage {

  navCtrl: any;

  constructor(
    public app: App
  ) {
    this.navCtrl = this.app.getRootNav();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AssignMaterialPage');
  }

}
