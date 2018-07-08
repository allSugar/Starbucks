import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import Chart from 'chart.js';
import { HttpService } from '../../../../service/HttpService';


@IonicPage()
@Component({
  selector: 'page-frequency',
  templateUrl: 'frequency.html',
})
export class FrequencyPage {

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
      method: 'statistics.repairItemWeekStatistics',
    }
    this.http.get(params).subscribe(res => {
      console.log(res)
      if (!!res && res.responseCode == 168080) {
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
  changeData(){
    this.data = this.data2;
  }
  data: any = [
    {title: '钟楼星巴克钟楼星巴克钟楼星巴克', percentage: '20%', price:'24000', count: '20'},
    {title: '三里屯星巴克', percentage: '20%', price:'24000', count: '20'},
    {title: '后海星巴克', percentage: '20%', price:'24000', count: '20'},
    {title: '翠微百货星巴克', percentage: '20%', price:'24000', count: '20'},
    {title: '北辰星巴克', percentage: '20%', price:'24000', count: '20'}

  ];
  data1: any = [
      {title: '钟楼星巴克钟楼星巴克钟楼星巴克', percentage: '20%', price:'24000', count: '20'},
      {title: '三里屯星巴克', percentage: '20%', price:'24000', count: '20'},
      {title: '后海星巴克', percentage: '20%', price:'24000', count: '20'},
      {title: '翠微百货星巴克', percentage: '20%', price:'24000', count: '20'},
      {title: '北辰星巴克', percentage: '20%', price:'24000', count: '20'}

  ];
  data2: any = [
    {title: '星期一', percentage: '20%', price:'24000', count: '20'},
    {title: '星期二', percentage: '20%', price:'24000', count: '20'},
    {title: '星期三', percentage: '20%', price:'24000', count: '20'},
    {title: '星期四', percentage: '20%', price:'24000', count: '20'},
    {title: '星期五', percentage: '20%', price:'24000', count: '20'}

  ];
  ionViewDidEnter() {
      Chart.Doughnut(this.chartPie.nativeElement.getContext("2d"), {
          data: {
              datasets: [
                  {
                      data: [20, 30, 15, 10, 25],
                      backgroundColor: [
                          "#1E8CE1",
                          "#8CC42A",
                          "#FDA109",
                          "#F85B25",
                          "#9A34B8"
                      ],
                      hoverBackgroundColor: [
                          "#1E8CE1",
                          "#8CC42A",
                          "#FDA109",
                          "#F85B25",
                          "#9A34B8"
                      ]
                  }]
          }
      });
  }
}
