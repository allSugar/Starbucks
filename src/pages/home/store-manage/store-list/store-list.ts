import { Component, ViewChild } from '@angular/core';
import { IonicPage, App, NavParams, Content, LoadingController } from 'ionic-angular';

import { HttpService } from '../../../../service/HttpService';
import { LoginService } from '@/../../src/service/LoginService';
import { RoleTypeService } from '@/../../src/service/RoleTypeService';
import { BaseUI } from '@/../../src/directives/comm/baseui';
import { RES_ROOT } from '../../../../providers/httpUrl';

@IonicPage()
@Component({
  selector: 'page-manage',
  templateUrl: 'store-list.html',
})
export class StoreManageListPage extends BaseUI {

  @ViewChild(Content) content: Content;

  store: Object[] = [];
  navCtrl: any;
  status: number;
  RES_ROOT: string;
  roleType: any;

  search: any;
  loading: any;


  constructor(
    public navParams: NavParams,
    public app: App,
    public login: LoginService,
    public loadingCtrl: LoadingController,
    public http: HttpService,
    public role: RoleTypeService
  ) {
    super();

    this.navCtrl = this.app.getRootNav();
    this.RES_ROOT = RES_ROOT;
    this.loading = super.showLoading(this.loadingCtrl);
    this.role.setUserRole(val => {
      this.roleType = val;
      this.getData();
    });
  }

  getData(keyword: string = '') {
    var params = {
      method: "store.findStoreInfoByStaff",
      staffSource: this.login.currentAccount['accountType'],
      staffType: this.roleType,
      staffUserId: this.login.id,
      keyWords: keyword
    };
    this.http.get(params).subscribe(res => {
      if (this.loading) {
        this.loading.dismiss();
      }
      if (!!res && res.responseCode == 157060) {
        let data = res.responseObj;
        for (let i = 0; i < data.length; i++) {
          this.store.push({
            id: data[i].id,
            name: data[i].storeName,
            url: data[i].shopPhotoList[0]
          });
        }
      };
    }, error => {

    });

  }
  goToOtherPage(item) {
    this.navCtrl.push('StoreIndexPage', {
      storeInfoId: item ? item.id : 0
    });
  }

  tabs(n: number) {
    this.status = this.status == n ? 0 : n;
  }

  HandleSearch() {
    this.loading = super.showLoading(this.loadingCtrl);
    this.store = [];
    this.getData(this.search)
  }
}
