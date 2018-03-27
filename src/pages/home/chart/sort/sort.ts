import { Component, ViewChild, ElementRef} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import Chart from 'chart.js';

@IonicPage()
@Component({
  selector: 'page-sort',
  templateUrl: 'sort.html',
})
export class SortPage {

    @ViewChild('chartPie') chartPie: ElementRef;

    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

    data: any = [
        {title: '设备维修', percentage: '20%', price:'24000', count: '20'},
        {title: '设施维修', percentage: '20%', price:'24000', count: '20'},
        {title: '设施保养', percentage: '20%', price:'24000', count: '20'},
        {title: '设备保养', percentage: '20%', price:'24000', count: '20'},
        {title: '桌椅维修', percentage: '20%', price:'24000', count: '20'}

    ];
    ionViewDidEnter() {
        Chart.Doughnut(this.chartPie.nativeElement.getContext("2d"), {
            data: {
                datasets: [
                    {
                        data: [20, 30, 15, 10, 25],
                        backgroundColor: [
                            "#FF8084",
                            "#FFA15C",
                            "#FFC45A",
                            "#31D5C2",
                            "#ADA8FE"
                        ],
                        hoverBackgroundColor: [
                            "#FF8084",
                            "#FFA15C",
                            "#FFC45A",
                            "#31D5C2",
                            "#ADA8FE"
                        ]
                    }]
            }
        });
    }
}
