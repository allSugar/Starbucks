import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, App, NavParams, ModalController } from 'ionic-angular';
import { CalendarModal, CalendarModalOptions } from 'ion2-calendar';

import { HttpService } from '../../../../../service/HttpService';

@IonicPage()
@Component({
  selector: 'page-drawing-map',
  templateUrl: 'drawing-map.html',
})
export class DrawingMapPage {

  @ViewChild('area') areaElement: ElementRef;

  navCtrl: any;
  help: Boolean = false;
  easel: Boolean = false;
  status: any;
  pointStatus: Number = 0;
  edge: Object = {
    top: false,
    left: true,
    bottom: false,
    right: true
  };
  position: any = {
    x: -20,
    y: 0,
    left: 0
  };
  orignal: any = {
    x: 0,
    y: 0
  };
  clientWidth: any;
  date: Date = new Date();
  weekdays: any[] = ['日', '一', '二', '三', '四', '五', '六'];

  constructor(
    public app: App,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public http: HttpService
  ) {
    this.navCtrl = this.app.getRootNav();
    this.getPointListData();
  }
  getPointListData() {
    let params = { method: "store.findPoint", clientId: '14a01fdab38b4bf3b93781e20aa3777b', type: 2 };
    this.http.get(params).subscribe(res => {
      if (!!res && res.responseCode == 179020) {
        console.log(res);
      }
    }, error => {

    });
  }
  tabs(number: Number) {
    this.pointStatus = number;
    this.handleFilter(false);
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
  dragImgEnd(event) {
    if (event.x != this.position.left) {
      this.position.left = event.x;
    }
  }
  dragEnd(event, block) {
    if (!!block) {
      if (!!event.x && !!event.y) {
        this.position.x = event.x;
        this.position.y = event.y;
        this.orignal.coordinateX = this.clientWidth - 30 - this.position.left + this.position.x;
        this.orignal.coordinateY = this.position.y;
        this.navCtrl.push("RepaireCategoryPage", { len: 4 });
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
  ionViewDidLoad() {
    this.clientWidth = this.areaElement.nativeElement.clientWidth || this.areaElement.nativeElement.offsetWidth;
  }
}
