import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import Chart from 'chart.js';
import { HttpService } from '../../../../service/HttpService';

@IonicPage()
@Component({
  selector: 'page-weekly-issues',
  templateUrl: 'weekly-issues.html',
})
export class WeeklyIssuesPage {

  @ViewChild('chartBar') chartBar: ElementRef;
  dataList: Object[] = [];
  data: Object[] = [];
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
      if (!!res && res.responseCode == 167110) {
        this.dataList = res.responseObj.repairStatisticsList;
        for (var i = 0; i < this.dataList.length; i++) {
          var dataList = this.dataList[i];
          this.data.push({
            number: dataList["totalRepairNum"],
            price: dataList["totalRepairPrice"]
          });
        }
      }
    });
  }
  ionViewDidEnter() {
      Chart.Bar(this.chartBar.nativeElement.getContext("2d"), {
          data: {
              labels: ['1', '2', '3', '4', '5'],
              datasets: [{
                  label: '已解决',
                  data: [48, 48, 48, 48, 48, 48],
                  backgroundColor: '#8CC42A',
                  stack: 'Stack 0'
              },{
                  label: '总计',
                  data: [100, 100, 100, 100, 100, 100],
                  backgroundColor: '#DFE6EA',
                  stack: 'Stack 0'
              }
              ]
          },
          options: {
              scales: {
                  yAxes: [{
                      ticks: {
                          beginAtZero: true
                      }
                  }]
              }
          }
      });
  }

  status: number = 1;
  tabs(n: number) {
    this.status = n;
  }
}
