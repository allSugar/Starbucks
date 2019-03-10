import { Component } from '@angular/core';
import { IonicPage, App, NavParams, LoadingController } from 'ionic-angular';

import { HttpService } from '@/../../src/service/HttpService';
import { BaseUI } from '../../../directives/comm/baseui';
import { ToastService } from '@/../../src/service/ToastService';
import { RES_ROOT } from '../../../providers/httpUrl';

@IonicPage()
@Component({
  selector: 'page-problem-detail',
  templateUrl: 'problem-detail.html',
})
export class ProblemDetailPage extends BaseUI {

  navCtrl: any;
  detailData: any = [];
  pointId: any;
  storeInfoId: any;
  problem: any;
  pageNumber: any = 0;
  totalNumber: any;
  RES_ROOT: any;
  leaveWord: any = '';

  constructor(
    public app: App,
    public navParams: NavParams,
    public http: HttpService,
    public loadingCtrl: LoadingController,
    public toast: ToastService
  ) {
    super();
    let loading = super.showLoading(this.loadingCtrl);
    this.RES_ROOT = RES_ROOT;

    this.navCtrl = this.app.getRootNav();
    if (this.navParams.get("pointId")) {
      this.pointId = this.navParams.get("pointId");
      this.storeInfoId = this.navParams.get("storeInfoId");
    }
    if (this.navParams.get('remove')) {
      let len = this.navParams.get('len'),
        startIndex = this.navCtrl.getViews().length - len;
      this.navCtrl.remove(startIndex, len);
    }
    this.getListData(loading);
  }

  doInfinite(infiniteScroll) {
    if (this.pageNumber === this.totalNumber) {
      infiniteScroll.complete();
      infiniteScroll.enable(false);
      return false;
    }
    let loading = super.showLoading(this.loadingCtrl);
    this.getListData(loading, infiniteScroll);
  }

  getListData(loading, infiniteScroll: any = false) {
    let params = {
      method: "repair.findStoreRepairTemporaryBillList",
      storeInfoId: this.storeInfoId,
      pointId: this.pointId,
      pageNumber: this.pageNumber + 1
    };
    this.http.get(params).subscribe(res => {
      loading.dismiss();
      if (infiniteScroll) {
        infiniteScroll.complete();
      }
      if (!!res && res.responseCode == 165030) {
        res.responseObj.map(item => {
          this.detailData.push(item);
        });
        this.totalNumber = this.totalNumber || res["totalNumber"];
        this.pageNumber = res["pageNumber"];
      };
    });
  }

  handleSaveMessage() {
    let params = {
      methods: 'repair.saveStoreRepairOrderItemMessage',
      storeRepairOrderItemId: this.pointId,
      leaveWord: this.leaveWord
    }

    this.http.get(params).subscribe(res => {
      if (!!res && res.responseCode == 180010) {
        this.toast.info('添加留言成功！')
      }
    }, error => {
      this.toast.info('添加留言失败！')
    });
  }

  goToOtherPage() {
    let point = {
      status: true,
      pointId: this.pointId,
      storeInfoId: this.storeInfoId
    };
    this.navCtrl.push('RepaireCategoryPage', { len: 1, Point: point });
  }
}
