import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import Chart from 'chart.js'
import { HttpService } from '../../../../service/HttpService';

@IonicPage()
@Component({
  selector: 'page-vulnerable-parts',
  templateUrl: 'vulnerable-parts.html',
})
export class VulnerablePartsPage {

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
      method: 'repair.repairItemStatistics',
    }
    this.http.get(params).subscribe(res => {
      console.log(res)
      if (!!res && res.responseCode == 168100) {
        console.log(res)
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
        {title: '钟楼星巴克', percentage: '20%', price:'24000', count: '20',barClass: 'bar-orange-m'},
        {title: '三里屯星巴克', percentage: '20%', price:'24000', count: '20',barClass: 'bar-orange-s'},
        {title: '后海星巴克', percentage: '20%', price:'24000', count: '20',barClass: 'bar-orange-l'},
        {title: '翠微百货星巴克', percentage: '20%', price:'24000', count: '20',barClass: 'bar-orange-xl'},
        {title: '北辰星巴克', percentage: '20%', price:'24000', count: '20',barClass: 'bar-orange-xxl'}

    ];
    ionViewDidEnter() {
        Chart.Doughnut(this.chartPie.nativeElement.getContext("2d"), {
            data: {
                datasets: [
                    {
                        data: [20, 30, 15, 10, 25],
                        backgroundColor: [
                            "#FB6428",
                            "#FF9102",
                            "#FEBE24",
                            "#FFE506",
                            "#FC481F"
                        ],
                        hoverBackgroundColor: [
                            "#FB6428",
                            "#FF9102",
                            "#FEBE24",
                            "#FFE506",
                            "#FC481F"
                        ]
                    }]
            }
        });
    }
}
