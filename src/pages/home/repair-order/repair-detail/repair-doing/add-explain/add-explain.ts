import { Component } from '@angular/core';
import { IonicPage, App, NavParams } from 'ionic-angular';

import { HttpService } from '@/../../src/service/HttpService';
import { ToastService } from '@/../../src/service/ToastService';

@IonicPage()
@Component({
  selector: 'page-add-explain',
  templateUrl: 'add-explain.html',
})
export class AddExplainPage {

  navCtrl: any;
  listdata: any = {
    method: "repair.saveStoreRepairOrderItem",
    id: "",
    storeInfoId: "",
    storeRepairOrderId: "",
    faultDes: ""
  };
  topClass: any;
  page: String = "AddExplainPage";
  RepairWarehouse: Object[];
  higherLevelId: any;
  len: Number = 1;

  constructor(
    public app: App,
    public navParams: NavParams,
    public http: HttpService,
    public toast: ToastService
  ) {
    this.navCtrl = this.app.getRootNav();
    let data = this.navParams.get("data"),
      listdata = this.navParams.get("listdata"),
      higherLevelId = this.navParams.get("higherLevelId");

    if (listdata) {
      this.listdata = listdata;
    } else {
      this.listdata.id = data.id;
      this.listdata.storeInfoId = data.storeInfoId;
      this.listdata.storeRepairOrderId = data.storeRepairOrderId;
    }

    let topClass = this.navParams.get("topClass");
    this.topClass = topClass ? topClass : 1;

    if (higherLevelId) {
      this.higherLevelId = higherLevelId;
    }

    this.len = this.navParams.get("len") || this.len;

    this.getRepairWarehouse();
  }

  getRepairWarehouse() {
    let params = { method: "repair.findStoreRepairWarehouseForPage", storeInfoId: this.listdata.storeInfoId, topClass: this.topClass, higherLevelId: "" };
    if (this.higherLevelId) {
      params.higherLevelId = this.higherLevelId;
    } else {
      delete params.higherLevelId;
    }
    this.http.get(params).subscribe(res => {
      if (!!res && res.responseCode == 164030 && res.responseObj.length) {
        this.RepairWarehouse = res.responseObj;
      }
    }, error => {

    });
  }
  goToOtherPage(item) {
    this.listdata.faultDes = this.listdata.faultDes || "";
    this.listdata.faultDes += (item.repairContent + "/");

    if (!item.hasSubset) {
      this.SaveExplain();
      return false;
    }

    this.navCtrl.push(this.page, { topClass: item.topClass + 1, higherLevelId: item.id, listdata: this.listdata, len: this.len + 1 });
  }

  SaveExplain() {
    this.http.get(this.listdata).subscribe(res => {
      if (res.responseCode == "168010") {
        this.GetOrderListData();
      } else {
        this.toast.info("添加说明异常，请稍后再试！");
      }
    });
  }

  GetOrderListData() {
    let params = { method: "repair.getStoreRepairOrderById", id: this.listdata.storeRepairOrderId, includeItem: 1 },
      subParams = { method: "repair.findStoreRepairOrderItem", storeRepairOrderId: "" };
    this.http.get(params).subscribe(res => {
      if (res.responseCode == "167060") {
        subParams.storeRepairOrderId = res.responseObj.id;
        this.http.get(subParams).subscribe(subres => {
          if (subres.responseCode == "168030") {
            res.responseObj.orderItemList = subres.responseObj;
            this.navCtrl.push("RepairDoingPage", { data: res.responseObj, remove: true, len: this.len + 1 });
          } else {
            this.toast.info("获取问题列表失败！");
          }
        });
      } else {
        this.toast.info("获取订单信息失败！");
      }
    });
  }

}
