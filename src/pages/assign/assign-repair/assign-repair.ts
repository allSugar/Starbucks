import { Component } from '@angular/core';
import { IonicPage, App, ModalController, NavParams } from 'ionic-angular';
import { CalendarModal, CalendarModalOptions } from 'ion2-calendar';

import { ToastService } from '@/../../src/service/ToastService';
import { HttpService } from '@/../../src/service/HttpService';

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
  params: any = {
    method: "repair.operationStoreRepairOrder",
    status: 3
  };

  constructor(
    public app: App,
    public modalCtrl: ModalController,
    public navParams: NavParams,
    public toast: ToastService,
    public http: HttpService
  ) {

    this.params.id = this.navParams.get("id");

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
        this.params.repairmanId = params.id;
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
    this.navCtrl.push("AssignConactPage", {
      callback: this.callBackFromB.bind(this)
    });
  }

  HandleSave() {
    let arr = this.time.split("T"),
      time = arr[1].substring(0, 5);
    this.params.orderRepairTime = this.dateFormmat + " " + time;
    this.http.get(this.params).subscribe(res => {
      if (res.responseCode = "168070") {
        this.toast.info("指定维修员成功", () => this.navCtrl.push("RepairListPage", { remove: true, len: 3 }));
      } else {
        this.toast.info("指定维修员异常");
      }
    });
  }
}
