import { Component } from '@angular/core';
import { IonicPage, ModalController } from 'ionic-angular';
import { CalendarModal, CalendarModalOptions } from 'ion2-calendar';

@IonicPage()

@Component({
  selector: 'page-calendar',
  templateUrl: 'calendar.html',
})
export class CalendarPage {

  date: Date = new Date();
  weekdays: any[] = ['日', '一', '二', '三', '四', '五', '六'];

  constructor(public modalCtrl: ModalController) {
    console.log(this.weekdays);
  }

  openCalendar() {
    const options: CalendarModalOptions = {
      title: ' ',
      monthFormat: 'yyyy 年 MM 月',
      weekdays: this.weekdays,
      defaultDate: this.date,
      closeLabel: '取消',
      doneLabel:'确定'
    };

    let myCalendar = this.modalCtrl.create(CalendarModal, {
      options: options
    });

    myCalendar.present();

    myCalendar.onDidDismiss((date, type) => {
      if (type === 'done') {
        this.date = date.dateObj;
      }
      console.log(date);
      console.log('type', type);
    })

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CalendarPage');
  }

}
