import { Component, ViewChild, ElementRef} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import Chart from 'chart.js';
import { HttpService } from '../../../../service/HttpService';

@IonicPage()
@Component({
  selector: 'page-sort',
  templateUrl: 'sort.html',
})
export class SortPage {
  orderList: Array<any> = [];
  order: Object[] = [];
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
      method: 'statistics.repairWarehouseStatistics',
      warehouseType:'1'
    }
    this.http.get(params).subscribe(res => {
      if (!!res && res.responseCode == 168110) {
        this.orderList = res.responseObj.repairStatisticsList;
        for (var i = 0; i < this.orderList.length; i++) {
          var orderList = this.orderList[i];
          this.order.push({
            repairNum: orderList.repairNum,
            repairPrice: orderList.repairPrice,
            warehouseName: orderList.warehouseName
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
      var data = [],lables =[];
      for(var i = 0; i < this.order.length; i++ ){
        data.push(this.order[i]["repairNum"]);
        lables.push(this.order[i]["warehouseName"]);
      }
        Chart.Doughnut(this.chartPie.nativeElement.getContext("2d"), {

            data: {
              labels: lables,
                datasets: [
                    {
                        data: data,
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
