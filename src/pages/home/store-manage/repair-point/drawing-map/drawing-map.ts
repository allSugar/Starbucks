import { Component } from '@angular/core';
import { IonicPage, App, NavParams, ModalController } from 'ionic-angular';
import { CalendarModal, CalendarModalOptions } from 'ion2-calendar';

@IonicPage()
@Component({
  selector: 'page-drawing-map',
  templateUrl: 'drawing-map.html',
})
export class DrawingMapPage {

  navCtrl: any;
  help: Boolean = false;
  easel: Boolean = false;
  status: any;
  edge = {
    top: false,
    left: true,
    bottom: false,
    right: true
  };
  date: Date = new Date();
  weekdays: any[] = ['日', '一', '二', '三', '四', '五', '六'];

  constructor(
    public app: App,
    public navParams: NavParams,
    public modalCtrl: ModalController
  ) {
    this.navCtrl = this.app.getRootNav();
  }

  handleFilter(name) {
    if (!name) {
      this.help = false;
      this.easel = false;
      return false;
    }
    this[name] = !this[name];
    name == 'easel' ? this.help = false : this.easel = false;
  }
  checkEdge() {
    this.edge = this.edge;
  }
  dragend(event, block) {
    if (!!block) {
      if (!!event.x && !!event.y) {
        this.navCtrl.push("RepairPointListPage");
      }
      block.resetPosition();
    }
  }
  goToOtherPage(pageName: String) {
    this.status = 1;
    this.navCtrl.push(pageName);
  }
  openCalendar() {
    const options: CalendarModalOptions = {
      title: ' ',
      monthFormat: 'yyyy 年 MM 月',
      weekdays: this.weekdays,
      defaultDate: this.date,
      closeLabel: '取消',
      doneLabel: '确定'
    };

    let myCalendar = this.modalCtrl.create(CalendarModal, {
      options: options
    });

    myCalendar.present();

    myCalendar.onDidDismiss((date, type) => {
      if (type === 'done') {
        this.date = date.dateObj;
      }
      this.handleFilter(false);
    })
  }
}
