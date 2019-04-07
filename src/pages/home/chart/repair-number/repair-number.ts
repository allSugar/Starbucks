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

  params: any = {
    method: 'statistics.repairItemWeekStatistics',
    timeBegin: '',
    timeEnd: ''
  }

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: HttpService
  ) {
    this.getData();
  }

  getData() {
    this.http.get(this.params).subscribe(res => {
      if (!!res && res.responseCode == 168080) {
        let Lists = res.responseObj.repairStatisticsList;
        this.dataList = Lists;
        for (var i = 0; i < Lists.length; i++) {
          this.data.push({
            num: Lists[i].repairNum,
            price: Lists[i].repairPrice,
            day: Lists[i].weekDay
          });
        }

        this.renderChart()
      }
    });
  }

  HandleDateChange(value) {
    this.data = [];
    this.status = 0;
    this.params.timeBegin = value.timeBegin
    this.params.timeEnd = value.timeEnd
    this.getData()
  }

  status: number = 0;
  tabs(n: number) {
    this.status = n;
  }

  renderChart() {
    var datas = [], labels = [];
    for (var i = 0; i < this.data.length; i++) {
      datas.push(this.data[i]["num"]);
      labels.push('周' + this.data[i]["day"]);
    }
    Chart.Doughnut(this.chartPie.nativeElement.getContext("2d"), {
      data: {
        labels: labels,
        datasets: [
          {
            data: datas,
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
