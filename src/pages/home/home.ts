import { Component } from '@angular/core';
import { App, NavParams } from 'ionic-angular';
 
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    private app: App,
    public navParams: NavParams,
  ) {
  }
  ionViewDidLoad() {

  }

}
