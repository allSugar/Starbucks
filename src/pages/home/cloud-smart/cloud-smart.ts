import { Component, ViewChild} from '@angular/core';
import { App, IonicPage, NavController, NavParams, Slides } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-cloud-smart',
  templateUrl: 'cloud-smart.html',
})
export class CloudSmartPage {

  @ViewChild(Slides) slides: Slides;
  constructor(
      public navCtrl: NavController,
      public navParams: NavParams
  ) {
  }


  ionViewDidLoad() {
      this.slides.autoplayDisableOnInteraction = false;
  }


}
