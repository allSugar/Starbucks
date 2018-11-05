import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController } from 'ionic-angular';
import { CalendarModal, CalendarModalOptions, DayConfig } from "ion2-calendar";

@IonicPage()
@Component({
  selector: 'page-page-tmpl',
  templateUrl: 'page-tmpl.html',
})
export class PageTmplPage {

  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    ) {

  }
  date: Date = new Date();
  openCalendar() {
    const options: CalendarModalOptions = {
      title: 'BASIC',
      defaultDate: this.date
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

  category: Object[] = [
    { url: 'repair-frequency', name: '维修频率' },
    { url: 'warranty-number', name: '报修次数' },
    { url: 'repair-maintain', name: '维修分类' },
    { url: 'easy-hart', name: '易损部位' },
    { url: 'weekly', name: '每周问题' },
    { url: 'efficiency', name: '厂商效率' },
    { url: 'reason', name: '物损原因' },
    { url: 'remains', name: '遗存问题' }
  ];



  status: any = true;
  import: any[] = [
    { url: 'import_img1' },
    { url: 'import_img2' },
    { url: 'import_img3' },
    { url: 'import_img4' },
    { url: 'import_img5' },
    { url: 'import_img6' }
  ];

  change() {
    console.log("change");
  }

}
