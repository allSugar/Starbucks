import { Component, ViewChild } from '@angular/core';
import { NavParams, Slides } from 'ionic-angular';

@Component({
  selector: 'page-index',
  templateUrl: 'index.html'
})
export class HomePage {

  category: any[] = [
    { url: 'repair-order', name: '维修单' },
    { url: 'cloud-smart', name: '云智能' },
    { url: 'cloud', name: '云盘' },
    { url: '3D-panorama', name: '3D全景' },
    { url: 'store-manage', name: '店面管理' },
    { url: 'chart', name: '统计' }
  ];
  @ViewChild(Slides) slides: Slides;
  constructor(
    public navParams: NavParams,
  ) {

  }
  ionViewDidLoad() {
    this.slides.autoplayDisableOnInteraction = false;
  }

}
