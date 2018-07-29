import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, App, NavParams, ModalController } from 'ionic-angular';
import { CalendarModal, CalendarModalOptions } from 'ion2-calendar';

import { HttpService } from '../../../../../service/HttpService';
import { RES_ROOT } from '../../../../../providers/httpUrl';

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
  Point: any = {
    method: "store.createPoint",
    coordinateX: 0,
    coordinateY: 0,
    type: 2,
    diameter: 30
  };
  PointListsRepair: any[];
  clientWidth: any;
  date: Date = new Date();
  weekdays: any[] = ['日', '一', '二', '三', '四', '五', '六'];
  storeInfoId: Number;
  drawingId: Number;
  RES_ROOT: string;
  drawingImg: Object = {
    fileRecord: {}
  };

  constructor(
    public app: App,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public http: HttpService
  ) {
    this.navCtrl = this.app.getRootNav();
    this.drawingId = this.navParams.get("drawingId");

    this.Point.storeInfoId = this.navParams.get("storeInfoId");
    this.Point.drawingId = this.drawingId;

    this.RES_ROOT = RES_ROOT;

    this.getDrawingImg();
    this.getPointListData();
  }
  getDrawingImg() {
    let params = { method: "store.findStoreCompletionDataFile", id: this.drawingId, fileType: 2 };
    this.http.get(params).subscribe(res => {
      if (!!res && res.responseCode == 162030 && res.responseObj.length) {
        this.drawingImg = res.responseObj[0];
      }
    }, error => {

    });
  }
  getPointListData() {
    let params = { method: "store.findPoint", type: 2, drawingId: this.drawingId };
    this.http.get(params).subscribe(res => {
      if (!!res && res.responseCode == 179020) {
        this.PointListsRepair = res.responseObj;
      }
    }, error => {

    });
  }
  tabs(number: Number) {
    if (number <= 1) {
      this.Point.colour = "point-repair";
    } else if (number === 2) {
      this.Point.colour = "point-photo";
    } else if (number === 3) {
      this.Point.colour = "point-file";
    }
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
        this.Point.coordinateX = this.clientWidth - 30 - this.position.left + this.position.x;
        this.Point.coordinateY = this.position.y;
        this.navCtrl.push("RepaireCategoryPage", { len: 0, Point: this.Point });
      }
      block.resetPosition();
    }
  }
  goToOtherPage(pageName: String, point: Object) {
    this.status = 1;
    this.navCtrl.push(pageName, {
      storeInfoId: this.Point.storeInfoId,
      pointId: point["id"]
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
      }
      this.handleFilter(false);
    })
  }
  ionViewDidLoad() {
    this.clientWidth = this.areaElement.nativeElement.clientWidth || this.areaElement.nativeElement.offsetWidth;
  }
}
