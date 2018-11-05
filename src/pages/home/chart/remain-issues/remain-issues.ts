import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpService } from '../../../../service/HttpService';

@IonicPage()
@Component({
  selector: 'page-remain-issues',
  templateUrl: 'remain-issues.html',
})
export class RemainIssuesPage {
  orderList: Array<any> = [];
  order: Object[] = [];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: HttpService
  ) {
    this.getData();
  }

  getData() {
    var params = {
      method: 'statistics.repairCompanyRemainsStatistics',
    }
    this.http.get(params).subscribe(res => {
      console.log(res)
      if (!!res && res.responseCode == 167050) {
        this.orderList = res.responseObj;
        for (var i = 0; i < this.orderList.length; i++) {
          var orderList = this.orderList[i];
          this.order.push({
            createTime: orderList.createTime,
            orderCode: orderList.orderCode,
            status: orderList.status
          })
        }
      }
    });
  }

  status: number = 0;
  tabs(n: number) {
    this.status = this.status == n ? 0 : n;
  }
}
