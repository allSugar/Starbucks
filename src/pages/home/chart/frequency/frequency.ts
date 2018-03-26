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

  data: any = [
      {shopName: '钟楼星巴克', percentage: '20%', price:'24000', count: '20',barClass: 'bar-blue'},
      {shopName: '三里屯星巴克', percentage: '20%', price:'24000', count: '20',barClass: 'bar-green'},
      {shopName: '后海星巴克', percentage: '20%', price:'24000', count: '20',barClass: 'bar-yellow'},
      {shopName: '翠微百货星巴克', percentage: '20%', price:'24000', count: '20',barClass: 'bar-orange'},
      {shopName: '北辰星巴克', percentage: '20%', price:'24000', count: '20',barClass: 'bar-purple'}

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
