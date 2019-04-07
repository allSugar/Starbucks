import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Content } from 'ionic-angular';

import { BaseUI } from '@/../../src/directives/comm/baseui';
import { HttpService } from '@/../../src/service/HttpService';
import { ToastService } from '@/../../src/service/ToastService';

@IonicPage()
@Component({
    selector: 'page-repair-kits',
    templateUrl: 'repair-kits.html',
})
export class RepairKitsPage extends BaseUI {

    @ViewChild(Content) content: Content;

    nav: object[] = [
        { name: '木材' },
        { name: '木材' },
        { name: '木材' },
        { name: '木材' },
        { name: '木材' }
    ];

    contain: object[] = [];

    status: number = 1;
    params: any = {
        method: 'goodsManager.findGoods',
        pageNumber: 0,
        queryStr: ''
    };
    loading: any;
    infiniteScroll: any;
    pageNumber: any = 0;
    totalNumber: any;

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public http: HttpService,
        private toast: ToastService,
        public loadingCtrl: LoadingController
    ) {
        super();
        this.loading = super.showLoading(this.loadingCtrl);
        this.getData();
    }

    doInfinite(infiniteScroll) {
        this.infiniteScroll = this.infiniteScroll || infiniteScroll;
        if (this.pageNumber >= this.totalNumber) {
            this.infiniteScroll.complete();
            this.infiniteScroll.enable(false);
            return false;
        }

        this.loading = super.showLoading(this.loadingCtrl);
        this.getData();
    }

    handleChange() {
        if (this.content && this.content.scrollToTop) {
            this.content.scrollToTop();
        }
        this.contain = [];
        this.params.pageNumber = 0;
        this.getData();
    }

    getData() {
        this.params.pageNumber = this.pageNumber + 1;
        if (this.params.pageNumber > this.totalNumber) {
            return false
        }
        this.http.get(this.params).subscribe(res => {
            this.loading.dismiss();
            if (this.infiniteScroll) {
                this.infiniteScroll.complete();
            }
            if (res.responseCode == '201040') {
                let data = res.responseObj;
                this.totalNumber = res["totalNumber"];
                this.pageNumber = res["pageNumber"];
                data.map(item => {
                    this.contain.push({
                        goodsName: item.goodsName,
                        stockNum: item.stockNum ? item.stockNum : 0,
                        purchasePrice: item.purchasePrice ? item.purchasePrice : 0
                    })
                });
                if (
                    this.pageNumber === 1 &&
                    this.totalNumber > 1 &&
                    this.infiniteScroll) {
                    this.infiniteScroll.enable(true);
                }
            } else {
                this.toast.info('获取维修包列表失败！')
            }
        });
    }
}
