import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import Chart from 'chart.js';


@IonicPage()
@Component({
  selector: 'page-repair-number',
  templateUrl: 'repair-number.html',
})
export class RepairNumberPage {
    @ViewChild('chartPie') chartPie: ElementRef;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
    data: any = [
        {title: '钟楼星巴克', percentage: '20%', price:'24000', count: '20'},
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
