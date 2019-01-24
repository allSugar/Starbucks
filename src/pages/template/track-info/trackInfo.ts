import { Component, Input, OnChanges } from '@angular/core';

import { ToastService } from '@/../../src/service/ToastService';
import { HttpService } from '@/../../src/service/HttpService';

@Component({
  selector: 'track-info-element',
  templateUrl: 'trackInfo.html'
})

export class TrackInfoTmpl {

  @Input() id: any;
  trackList: Array<any> = [];

  constructor(
    public toast: ToastService,
    public http: HttpService
  ) { }

  ngOnChanges() {
    this.getTrack()
  }

  DateFormat(date, fmt) {
    date = new Date(date)
    var o = {
      "M+": date.getMonth() + 1,                 //月份   
      "d+": date.getDate(),                    //日   
      "h+": date.getHours(),                   //小时   
      "m+": date.getMinutes(),                 //分   
      "s+": date.getSeconds(),                 //秒   
      "q+": Math.floor((date.getMonth() + 3) / 3), //季度   
      "S": date.getMilliseconds()             //毫秒   
    };
    if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    for (var k in o) {
      if (new RegExp("(" + k + ")").test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
      }
    }
    return fmt;
  }

  getTrack() {
    let params = {
      method: 'repair.findStoreRepairOrderTrack',
      storeRepairOrderId: this.id
    }

    this.http.get(params).subscribe(res => {
      if (res.responseCode == '170010') {
        this.trackList = res.responseObj
        this.trackList.map(item => {
          item.operationTimeName = this.DateFormat(item.operationTime, 'MM月dd日 hh:mm')
        })
      } else {
        this.toast.info('获取流程失败')
      }
    });
  }

  ionViewWillEnter() {
  }
}