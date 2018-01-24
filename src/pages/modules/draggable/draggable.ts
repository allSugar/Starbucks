import { Component, ElementRef, Renderer2, Renderer } from '@angular/core';
import { NavController } from 'ionic-angular';

/**
 * Generated class for the DraggablePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-draggable',
  templateUrl: 'draggable.html',
})
export class DraggablePage {

  answer: any;
  processed: boolean = false;
  status: any;

  constructor(public navCtrl: NavController, public elementRef: ElementRef, public renderer2: Renderer2,
    public renderer: Renderer) {

  }

  ionViewDidLoad() {
  }

  getModule(e){
    console.log(e);
  }

  reset() {
    this.processed = false;
    if (this.status) {
      this.renderer2.removeClass(this.answer, 'selected');
      this.renderer2.removeChild(this.answer, this.status);
    }
  }

  success(i) {
    this.processed = true;
    this.status = this.renderer2.createElement('div');
    this.renderer.createText(this.status, i == 3 ? 'right' : 'wrong');
    this.renderer2.addClass(this.status, 'ansstatus');
    this.renderer2.appendChild(this.answer, this.status);
  }


}
