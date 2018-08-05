import { Component, ViewChild, ElementRef} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import Chart from 'chart.js';
import { HttpService } from '../../../../service/HttpService';

@IonicPage()
@Component({
  selector: 'page-sort',
  templateUrl: 'sort.html',
})
export class SortPage {
  orderList: Array<any> = [];
  order: Object[] = [];
    @ViewChild('chartPie') chartPie: ElementRef;

    constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      public http: HttpService
    ) {
      this.getData();
    }
  getData() {
    var params = {
      method: 'statistics.repairWarehouseStatistics',
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
    this.status = n;
  }

    data: any = [
        {title: '设备维修', percentage: '20%', price:'24000', count: '20'},
        {title: '设施维修', percentage: '20%', price:'24000', count: '20'},
        {title: '设施保养', percentage: '20%', price:'24000', count: '20'},
        {title: '设备保养', percentage: '20%', price:'24000', count: '20'},
        {title: '桌椅维修', percentage: '20%', price:'24000', count: '20'}

    ];
    ionViewDidEnter() {
        Chart.Doughnut(this.chartPie.nativeElement.getContext("2d"), {
            data: {
                datasets: [
                    {
                        data: [20, 30, 15, 10, 25],
                        backgroundColor: [
                            "#FF8084",
                            "#FFA15C",
                            "#FFC45A",
                            "#31D5C2",
                            "#ADA8FE"
                        ],
                        hoverBackgroundColor: [
                            "#FF8084",
                            "#FFA15C",
                            "#FFC45A",
                            "#31D5C2",
                            "#ADA8FE"
                        ]
                    }]
            }
        });
    }
}
