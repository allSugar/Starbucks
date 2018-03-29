import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-news-detail',
  templateUrl: 'news-detail.html',
})
export class NewsDetailPage {

  status: number;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
    this.status = navParams.get('status');
  }


  tabs(n: number) {
    this.status = n;
  }

}
