import { Component, ViewChild } from '@angular/core';
import { IonicPage, App, NavParams, Content, LoadingController } from 'ionic-angular';

import { HttpService } from '@/../../src/service/HttpService';
import { LoginService } from '@/../../src/service/LoginService';
import { RoleTypeService } from '@/../../src/service/RoleTypeService';
import { BaseUI } from '@/../../src/directives/comm/baseui';
import { RES_ROOT } from '@/../../src/providers/httpUrl';

@IonicPage()
@Component({
  selector: 'page-manage',
  templateUrl: 'store-list.html',
})
export class StoreManageListPage extends BaseUI {

  @ViewChild(Content) content: Content;

  store: Object[] = [];
  jurisdictionStore: Object[] = [];
  navCtrl: any;
  status: number;
  RES_ROOT: string;
  roleType: any;

  search: any;
  loading: any;

  pageNumber: any = 0;
  totalNumber: any;
  infiniteScroll: any;


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

    this.loading = super.showLoading(this.loadingCtrl, '请稍后', false);

    this.role.setUserRole(val => {
      this.roleType = val;
      this.getJurisdictionData()
      this.getData();
    });
  }

  doInfinite(infiniteScroll) {
    this.infiniteScroll = this.infiniteScroll || infiniteScroll;
    if (this.pageNumber === this.totalNumber) {
      infiniteScroll.complete();
      infiniteScroll.enable(false);
      return false;
    }

    this.getData();
  }

  getData(keyword: string = '') {
    this.loading = this.loading || super.showLoading(this.loadingCtrl);
    var params = {
      method: "store.findStoreInfoByStaff",
      staffSource: this.login.currentAccount['accountType'],
      staffType: this.roleType,
      staffUserId: this.login.id,
      pageNumber: this.pageNumber + 1,
      keyWords: keyword
    };
    this.http.get(params).subscribe(res => {

      if (this.infiniteScroll) {
        this.infiniteScroll.complete();
      }

      if (this.loading) {
        this.loading.dismiss();
        this.loading = "";
      }

      if (!!res && res.responseCode == 157060) {
        let data = res.responseObj;

        this.totalNumber = this.totalNumber || res["totalNumber"];
        this.pageNumber = res["pageNumber"];

        for (let i = 0; i < data.length; i++) {
          this.store.push({
            id: data[i].id,
            name: data[i].storeName,
            url: data[i].shopPhotoList[0]
          });
        }

        if (
          this.pageNumber === 1 &&
          this.totalNumber > 1 &&
          this.infiniteScroll) {
          this.infiniteScroll.enable(true);
        }
      };
    }, error => {

    });

  }

  getJurisdictionData() {
    var params = {
      method: "store.findStoreInfoByStaff",
      staffSource: this.login.currentAccount['accountType'],
      staffType: this.roleType,
      staffUserId: this.login.id,
    };

    this.http.get(params).subscribe(res => {
      let data = res.responseObj;
      for (let i = 0; i < data.length; i++) {
        this.jurisdictionStore.push({
          id: data[i].id,
          name: data[i].storeName,
          url: data[i].shopPhotoList[0]
        });
      }
    })
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
    this.store = [];
    this.totalNumber = 0;
    this.pageNumber = 0;
    this.getData(this.search)
  }
}
