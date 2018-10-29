import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, App, NavParams, ToastController, Content } from 'ionic-angular';

import { ToastService } from '@/../../src/service/ToastService';
import { HttpService } from '@/../../src/service/HttpService';
import { LoginService } from '@/../../src/service/LoginService';

@IonicPage()
@Component({
  selector: 'page-assign-conact',
  templateUrl: 'assign-conact.html',
})
export class AssignConactPage {

  @ViewChild(Content) content: Content;
  navCtrl: any;
  repairMemberList: any;
  /*搜索的关键字*/
  searchInput: string = '';
  searchingItems = []; //搜索显示的数组
  callback: Function;
  repairMember: any;

  constructor(
    public app: App,
    public navParams: NavParams,
    public toastCtrl: ToastController,
    public elementRef: ElementRef,
    public toast: ToastService,
    public http: HttpService,
    public login: LoginService
  ) {
    this.callback = this.navParams.get("callback")
    this.navCtrl = this.app.getRootNav();
    this.getData();
  }

  getData() {
    let params = { method: "repairCompanyManager.findRepairCompanyStaffs", repairCompanyId: this.login["userInfo"]["repairCompanyList"][0]["id"] };
    this.http.get(params).subscribe(res => {
      if (res.responseCode == "175030") {
        this.repairMemberList = res.responseObj;
      } else {
        this.toast.info("获取维修员异常，请稍后再试！");
      }
    });
  }
  /**
   *通过关键字查询搜索的结果值
   */
  goSearchResult(ev: any) {
    let val = ev.target.value;
    this.searchInput = val;
    if (val && val.trim() != '') {
    }
  }


  HandleContactChange(contact) {
    this.repairMember = contact;
  }

  HandleSave() {
    this.callback(this.repairMember).then(() => {
      this.navCtrl.pop();
    });
  }
  HandleQuit() {
    this.callback(false).then(() => {
      this.navCtrl.pop();
    });
  }
}
