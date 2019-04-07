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

  repairList: Object[] = [];
  repair: Object[] = [];

  params: any = {
    method: 'statistics.repairFrequencyStatistics',
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
      if (!!res && res.responseCode == 167110) {
        this.repairList = res.responseObj.repairStatisticsList;
        this.RenderChart()
      }
    });
  }

  status: number = 0;
  tabs(n: number) {
    this.status = n;
  }

  HandleDateChange(value) {
    this.status = 0;
    this.params.timeBegin = value.timeBegin
    this.params.timeEnd = value.timeEnd
    this.getData()
  }

  RenderChart() {
    var lables = [], datas = [];
    for (var i = 0; i < this.repairList.length; i++) {
      lables.push(this.repairList[i]["storeName"]);
      datas.push(this.repairList[i]["repairNum"]);
    }
    Chart.Doughnut(this.chartPie.nativeElement.getContext("2d"), {
      data: {
        labels: lables,
        datasets: [
          {
            data: datas,
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
