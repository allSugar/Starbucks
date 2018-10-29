import { Component } from '@angular/core';
import { IonicPage, App, ModalController, NavParams } from 'ionic-angular';
import { CalendarModal, CalendarModalOptions } from 'ion2-calendar';

import { ToastService } from '@/../../src/service/ToastService';

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
  repairMember: any = {};
  params: any = {};

  constructor(
    public app: App,
    public modalCtrl: ModalController,
    public navParams: NavParams,
    public toast: ToastService,
  ) {

    this.params.sroiIds = this.navParams.get("ids");

    let d = new Date(),
      nd = new Date(d.getTime() + (3600000 * 8));

    this.time = nd.toISOString();
    this.dateFormmat = new Date().toLocaleDateString().replace(/\//g, "-");
    this.navCtrl = this.app.getRootNav();
  }

  callBackFromB(params) {
    return new Promise((resolve, reject) => {
      resolve();
      if (this.repairMember.name || params) {
        this.repairMember = params || this.repairMember;
        this.params.finishRepairmanId = params.id;
      } else {
        this.toast.info("选择维修员失败！");
      }
    });
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
    console.log(this.params);
    this.navCtrl.push("AssignConactPage", {
      callback: this.callBackFromB.bind(this)
    });
  }
}
