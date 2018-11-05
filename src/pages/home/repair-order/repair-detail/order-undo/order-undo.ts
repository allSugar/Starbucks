import { Component } from '@angular/core';
import { IonicPage, App, NavParams } from 'ionic-angular';

import { ToastService } from '@/../../src/service/ToastService';
import { HttpService } from '@/../../src/service/HttpService';
import { LoginService } from '@/../../src/service/LoginService';
import { RoleTypeService } from '@/../../src/service/RoleTypeService';

@IonicPage()
@Component({
  selector: 'page-order-undo',
  templateUrl: 'order-undo.html',
})
export class orderUndoPage {

  data: any;
  navCtrl: any;
  currentAccount: any;
  isassign: Boolean = false;
  isCheckedNum: any = 0;
  isCheckedAll: Boolean = false;
  roleType: any;

  constructor(
    public app: App,
    public navParams: NavParams,
    public toast: ToastService,
    public login: LoginService,
    public http: HttpService,
    public role: RoleTypeService
  ) {
    this.currentAccount = this.login.currentAccount;
    this.navCtrl = this.app.getRootNav();
    this.data = this.navParams.get('data');
    this.setDataDefault(this.data);
    this.role.setUserRole(val => {
      this.roleType = val;
    });
  }

  setDataDefault(data) {
    data.orderItemList.map(item => item.isChecked = false);
  }

  goToOtherPage(name: string) {
    this.navCtrl.push(name);
  }

  goToDetailPage(name) {
    this.navCtrl.push(name);
  }

  assignRepair() {
    this.isassign = true;
  }

  HandleCheckAll() {
    this.data.orderItemList.map(item => item.isChecked = this.isCheckedAll);
    if (this.isCheckedAll) {
      this.isCheckedNum = this.data.orderItemList.length;
    } else {
      this.isCheckedNum = 0;
    }
  }

  HandleIsChecked(isChecked) {
    if (isChecked) {
      this.isCheckedNum++;
    } else {
      this.isCheckedNum--;
    }
    if (this.isCheckedNum === this.data.orderItemList.length) {
      this.isCheckedAll = true;
    } else {
      this.isCheckedAll = false;
    }
  }

  assignRepairNext() {
    if (!this.isCheckedAll) {
      this.toast.info("请选择全部问题！");
      return false;
    }
    let ids = [];
    this.data.orderItemList.map(item => {
      if (item.isChecked) {
        ids.push(item.id)
      }
    });
    console.log(this.data);
    this.navCtrl.push("AssignRepairPage", { id: this.data.id });
  }

}
