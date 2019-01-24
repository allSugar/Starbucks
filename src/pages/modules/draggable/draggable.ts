import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-draggable',
  templateUrl: 'draggable.html',
})
export class DraggablePage {
  constructor(
    public navCtrl: NavController
  ) {
  }

  ionViewDidLoad() {
  }

  dragend(ev) {
  }
}
