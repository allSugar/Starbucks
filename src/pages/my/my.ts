import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';

@Component({
  selector: 'page-my',
  templateUrl: 'my.html',
})

export class MyPage {

  constructor(
    public navCtrl: NavController,
    public statusBar: StatusBar
  ) {
  }
}
