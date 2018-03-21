import { Component, ViewChild } from '@angular/core';
import { NavParams, Slides } from 'ionic-angular';
 
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild(Slides) slides: Slides;
  constructor(
    public navParams: NavParams,
  ) {
    
  }
  ionViewDidLoad() {
    this.slides.autoplayDisableOnInteraction = false;
    console.log(this.slides);
    this.slides.pager = true;
    // this.slides.paginationType = "progress";
  }

}
