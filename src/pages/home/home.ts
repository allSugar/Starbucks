import { Component } from '@angular/core';
import { App, NavParams } from 'ionic-angular';

import { LoginPage } from '../login/login';

import { DraggablePage } from '../modules/draggable/draggable';
import { LoginService } from '../../model/LoginService';
 
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  navCtrl:any;
  constructor(
    private app: App,
    public navParams: NavParams,
    private login:LoginService
  ) {
    this.navCtrl = this.app.getRootNav();
  }
  goMap() {
    this.navCtrl.push('MapPage', {
      id: "1",
      name: "map"
    });
  }

  goChart() {
    this.navCtrl.push('ChartPage', {
      id: "2",
      name: "chart"
    });
  }

  goSlide() {
    this.navCtrl.push('SlidePage', {
      id: "3",
      name: "slide"
    });
  }

  goAlphaScroll() {
    this.navCtrl.push('AlphaListPage', {
      id: "4",
      name: "AlphaScroll"
    });
  }

  goCard() {
    this.navCtrl.push('CardPage', {
      id: "5",
      name: "CardPage"
    });
  }

  goDrag() {
    this.navCtrl.push(DraggablePage, {
      id: "6",
      name: "DragPage"
    });
  }

  goFileUpload(){
    this.navCtrl.push('FileUploadPage', {
      id: "7",
      name: "FileUploadPage"
    });
  }

  goCalendar(){
    this.navCtrl.push('CalendarPage', {
      id: "8",
      name: "CalendarPage"
    });
  }

  loginOut(){
    this.login.loginOut();
    // this.navCtrl.setRoot(LoginPage);
  }
  ionViewDidLoad() {

  }

}
