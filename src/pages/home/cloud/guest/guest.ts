import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-guest',
  templateUrl: 'guest.html',
})
export class GuestPage {

  picture: any[] = [
      {url: 'change-before', name: '客区照片1'},
      {url: 'change-after', name: '客区照片2'},
      {url: 'change-before', name: '客区照片3'},
      {url: 'explain', name: '使用说明1'},
      {url: 'explain', name: '使用说明2'}
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


}
