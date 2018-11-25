import { Component, Input, Output, EventEmitter } from '@angular/core';
import { App, LoadingController } from 'ionic-angular';

import { BaseUI } from '@/../../src/directives/comm/baseui';
import { ToastService } from '@/../../src/service/ToastService';
import { HttpService } from '@/../../src/service/HttpService';

@Component({
  selector: 'order-point-list',
  templateUrl: 'order-point-list.html'
})

export class OrderPointListTmpl extends BaseUI {

  // 问题对象
  @Input() listdata: any = {};
  // 父级页面是否点击指定维修员
  @Input() isassign: Boolean = false;
  // 当前账户的权限
  @Input() roletype: any;
  // 订单状态
  @Input() repairstatus: any;

  // 跳转其它页面回调方法 
  @Output() goto = new EventEmitter<any>();
  // 判断当前问题对象是否选中回调方法
  @Output() ischecked = new EventEmitter<any>();
  // 完成操作的回调方法
  @Output() complete = new EventEmitter<any>();

  navCtrl: any;

  constructor(
    public app: App,
    public loadingCtrl: LoadingController,
    public http: HttpService,
    public toast: ToastService
  ) {
    super();
    this.navCtrl = this.app.getRootNav();
  }

  goToOtherPage(name) {
    if (name === "OrderImgDetailPage") {
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

  AddExplain() {
    this.navCtrl.push("AddExplainPage", { data: this.listdata });
  }

  HandleCompleteOrder() {

    let params = { method: "repair.operationStoreRepairOrderItem", sroiIds: this.listdata.id, status: 7 };
    this.http.get(params).subscribe(res => {
      if (res.responseCode == "168070") {
        this.complete.emit(this.listdata.id);
      } else {
        this.toast.info("修改问题状态异常，请稍后再试！");
      }
    });
  }

  FillInReport() {
    console.log(this);
    this.navCtrl.push("ReportPage", { data: this.listdata });
  }
}