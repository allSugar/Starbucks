import { Component } from '@angular/core';
import { IonicPage, App, LoadingController } from 'ionic-angular';

import { BaseUI } from '@/../../src/directives/comm/baseui';
import { ToastService } from '@/../../src/service/ToastService';
import { HttpService } from '@/../../src/service/HttpService';

/**
 * Generated class for the OrderGoodsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-order-goods',
  templateUrl: 'order-goods.html',
})
export class OrderGoodsPage extends BaseUI {

  navCtrl: any;
  orderGoodsList: Array<any> = [];
  infiniteScroll: any;
  pageNumber: any = 0;
  totalNumber: any;

  constructor(
    public app: App,
    public http: HttpService,
    public toast: ToastService,
    public loadingCtrl: LoadingController
  ) {
    super()
    this.navCtrl = this.app.getRootNav()
    let loading = super.showLoading(this.loadingCtrl);
    this.GetOrderGoodsList(loading)
  }

  doInfinite(infiniteScroll) {
    this.infiniteScroll = this.infiniteScroll || infiniteScroll;
    if (this.pageNumber === this.totalNumber) {
      infiniteScroll.complete();
      infiniteScroll.enable(false);
      return false;
    }
    let loading = super.showLoading(this.loadingCtrl);
    this.GetOrderGoodsList(loading, infiniteScroll);
  }

  GetOrderGoodsList(loading, infiniteScroll: any = false, ) {
    let params = {
      method: 'goodsManager.findGoods',
      pageNumber: this.pageNumber + 1,
      pageSize: 50
    }

    this.http.get(params).subscribe(res => {
      loading.dismiss();
      if (infiniteScroll) {
        infiniteScroll.complete();
      }
      if (res.responseCode == '201040') {
        this.orderGoodsList = this.orderGoodsList.concat(res.responseObj)
        this.totalNumber = res["totalNumber"] || this.totalNumber;
        this.pageNumber = res["pageNumber"];
        if (
          this.pageNumber === 1 &&
          res["totalNumber"] > 1 &&
          this.infiniteScroll
        ) {
          this.infiniteScroll.enable(true);
        }
      } else {
        this.toast.info('请求耗材列表数据失败')
      }
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderGoodsPage');
  }

}
