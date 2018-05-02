import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import Chart from 'chart.js';

@IonicPage()
@Component({
  selector: 'page-frequency',
  templateUrl: 'frequency.html',
})
export class FrequencyPage {

    @ViewChild('chartPie') chartPie: ElementRef;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
    status: number = 0;
    tabs(n: number) {
        this.status = n;
    }
  data: any = [
      {title: '钟楼星巴克钟楼星巴克钟楼星巴克', percentage: '20%', price:'24000', count: '20'},
      {title: '三里屯星巴克', percentage: '20%', price:'24000', count: '20'},
      {title: '后海星巴克', percentage: '20%', price:'24000', count: '20'},
      {title: '翠微百货星巴克', percentage: '20%', price:'24000', count: '20'},
      {title: '北辰星巴克', percentage: '20%', price:'24000', count: '20'}

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
