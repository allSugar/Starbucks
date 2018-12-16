import { Component } from '@angular/core';
import { IonicPage, App, NavParams, LoadingController } from 'ionic-angular';

import { BaseUI } from '@/../../src/directives/comm/baseui';
import { HttpService } from '@/../../src/service/HttpService';
import { ToastService } from '@/../../src/service/ToastService';

@IonicPage()
@Component({
  selector: 'page-assign-material',
  templateUrl: 'assign-material.html',
})
export class AssignMaterialPage extends BaseUI {

  navCtrl: any;
  params: any = {
    method: "repair.operationStoreRepairOrderItem",
    sroiIds: '',
    status: 2,
    purchaseDays: '',
    purchaseDes: ''
  }
  constructor(
    public app: App,
    public navParams: NavParams,
    public http: HttpService,
    public loadingCtrl: LoadingController,
    public toast: ToastService
  ) {
    super();
    this.params.sroiIds = this.navParams.get('sroiIds');
    this.navCtrl = this.app.getRootNav();
  }

  HandleQuit() {
    this.navCtrl.pop()
  }

  HandleSave() {
    let loading = super.showLoading(this.loadingCtrl);
    this.http.get(this.params).subscribe(res => {
      loading.dismiss();
      if (!!res && res.responseCode == 168070) {
        this.toast.info('材料采购信息填写完成')
        this.HandleQuit()
        return false;
      }
      this.toast.info('材料采购信息填写失败，请稍后再试')
    });
  }
}
