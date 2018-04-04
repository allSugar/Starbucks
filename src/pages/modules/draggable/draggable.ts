import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-draggable',
  templateUrl: 'draggable.html',
})
export class DraggablePage {

  @ViewChild('content') DragElement: ElementRef;
  constructor(
    public navCtrl: NavController
  ) {
    console.log(this);
  }

  ionViewDidLoad() {
  }

  dragend(ev) {
    console.log(ev);
  }
}
