import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import Chart from 'chart.js'
@IonicPage()
@Component({
  selector: 'page-vulnerable-parts',
  templateUrl: 'vulnerable-parts.html',
})
export class VulnerablePartsPage {


    @ViewChild('chartPie') chartPie: ElementRef;

    constructor(public navCtrl: NavController, public navParams: NavParams) {
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
