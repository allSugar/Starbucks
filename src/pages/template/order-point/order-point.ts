import { Component, Input, Output, EventEmitter } from '@angular/core';
import { App, LoadingController } from 'ionic-angular';
import { BaseUI } from '@/../../src/directives/comm/baseui';
import { ToastService } from '@/../../src/service/ToastService';

import { HttpService } from '@/../../src/service/HttpService';
import { LoginService } from '@/../../src/service/LoginService';

@Component({
  selector: 'order-point',
  templateUrl: 'order-point.html'
})

export class OrderPointTmpl extends BaseUI {

  @Input() retract: Boolean = true;
  @Input() done: Boolean = true;
  @Input() listdata: any = {};
  @Input() detail: Boolean = true;
  @Input() isassign: Boolean = false;

  @Output() goto = new EventEmitter<any>();
  @Output() ischecked = new EventEmitter<any>();

  navCtrl: any;
  currentAccount: any;

  constructor(
    public app: App,
    public loadingCtrl: LoadingController,
    public http: HttpService,
    public toast: ToastService,
    public login: LoginService
  ) {
    super();
    this.currentAccount = this.login.userInfo['currentAccount'];
    this.navCtrl = this.app.getRootNav();
  }

  goToOtherPage(name) {
    if (name === "OrderImgDetailPage" || !this.done) {
      this.goto.emit(name);
    }
  }

  deleteStoreRepairOrder() {
    let loading = super.showLoading(this.loadingCtrl),
      params = { method: "repair.deleteStoreRepairOrderItem", ids: [this.listdata.id] };

    this.http.get(params).subscribe(res => {
      loading.dismiss();
      if (res.responseCode == "168020") {
        this.toast.info("撤销成功！", () => this.navCtrl.push("RepairListPage", { remove: true, len: 2 }));
      }
      if (res.responseCode == "168021") {
        this.toast.info("订单已确认完成或已取消，不允许删除维修项！");
      }
      if (res.responseCode == "168022") {
        this.toast.info("撤销异常，请稍后再试！");
      }
    });
  }

  assignMaterial() {
    this.navCtrl.push("AssignMaterialPage");
  }

  HandleReturnQuestion() {
    let params = { method: "repair.operationStoreRepairOrderItem", sroiIds: String(this.listdata.id), status: -2 };
    this.http.get(params).subscribe(res => {
      if (res.responseCode == "168070") {
        this.toast.info("退回成功！", () => this.navCtrl.push("RepairListPage", { remove: true, len: 2 }));
      }
      if (res.responseCode == "168072") {
        this.toast.info("退回异常，请稍后再试！");
      }
    });
  }

  HandleIsChecked() {
    this.ischecked.emit(this.listdata.isChecked);
  }
}