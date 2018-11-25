import { Component } from '@angular/core';
import { App, IonicPage, NavParams, LoadingController } from 'ionic-angular';

import { BaseUI } from '@/../../src/directives/comm/baseui';
import { ToastService } from '@/../../src/service/ToastService';
import { HttpService } from '@/../../src/service/HttpService';

/**
 * Generated class for the ReportPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-report',
  templateUrl: 'report.html',
})
export class ReportPage extends BaseUI {

  data: any;
  navCtrl: any;

  StoreRepairOrderItem: any = {
    method: "repair.reportStoreRepairOrderItem",
    id: "",
    finishDes: ""
  };

  constructor(
    public app: App,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public http: HttpService,
    public toast: ToastService
  ) {
    super();
    this.navCtrl = this.app.getRootNav();
    this.data = this.navParams.get("data");
  }

  HandleSave() {
    if (!this.data) {
      return false;
    }

    this.StoreRepairOrderItem.id = this.data.storeRepairOrderId;

    let loading = super.showLoading(this.loadingCtrl);
    this.http.get(this.StoreRepairOrderItem).subscribe(res => {
      loading.dismiss();
      if (res.responseCode == "168062") {
        this.toast.info("添加报告成功！", () => this.navCtrl.push("ReportDetailPage"));
        return false;
      }
      this.toast.info("添加报告失败，请稍后再试！");
    });
  }

  HandleQuit() {
    this.navCtrl.pop();
  }
}
