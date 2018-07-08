import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import Chart from 'chart.js';

import { HttpService } from '../../../../service/HttpService';

@IonicPage()
@Component({
  selector: 'page-repair-number',
  templateUrl: 'repair-number.html',
})
export class RepairNumberPage {
    @ViewChild('chartPie') chartPie: ElementRef;
    data: Object[] = [];
    dataList: Object[] = [];
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
        this.dataList = res.responseObj.repairStatisticsList;
        for (var i = 0; i < this.dataList.length; i++) {
          this.data.push({
            num: this.dataList[i].repairNum,
            price: this.dataList[i].repairPrice,
            day: this.dataList[i].weekDay
          })
        }
      }
    });
  }
  status: number = 0;
  tabs(n: number) {
    this.status = n;
  }
  ionViewDidEnter() {
        Chart.Doughnut(this.chartPie.nativeElement.getContext("2d"), {
            data: {
                datasets: [
                    {
                        data: [20, 30, 15, 10, 25],
                        backgroundColor: [
                            "#2A7DFA",
                            "#36B156",
                            "#55DCB4",
                            "#5EE7FF",
                            "#2A9DFE"
                        ],
                        hoverBackgroundColor: [
                            "#2A7DFA",
                            "#36B156",
                            "#55DCB4",
                            "#5EE7FF",
                            "#2A9DFE"
                        ]
                    }]
            }
        });
    }
}
