import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-import-img',
  templateUrl: 'import-img.html',
})
export class ImportImgPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  img: any[] = [
      { url: 'import_img1' },
      { url: 'import_img2' },
      { url: 'import_img3' },
      { url: 'import_img4' },
      { url: 'import_img5' },
      { url: 'import_img6' }
  ];
  ionViewDidLoad() {
    console.log('ionViewDidLoad ImportImgPage');
  }

}
