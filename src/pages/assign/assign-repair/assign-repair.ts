import { Component } from '@angular/core';
import { IonicPage, App, ModalController } from 'ionic-angular';
import { CalendarModal, CalendarModalOptions } from 'ion2-calendar';

@IonicPage()
@Component({
  selector: 'page-assign-repair',
  templateUrl: 'assign-repair.html',
})
export class AssignRepairPage {

  navCtrl: any;

  date: Date = new Date();
  weekdays: any[] = ['日', '一', '二', '三', '四', '五', '六'];
  dateFormmat: String;
  time: any;

  constructor(
    public app: App,
    public modalCtrl: ModalController
  ) {

    let d = new Date(),
      nd = new Date(d.getTime() + (3600000 * 8));

    this.time = nd.toISOString();
    this.dateFormmat = new Date().toLocaleDateString().replace(/\//g, "-");
    this.navCtrl = this.app.getRootNav();
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
        this.dateFormmat = date.string;
      }
    });
  }

  assignRepairMan() {
    this.navCtrl.push("AssignConactPage");
  }
}
