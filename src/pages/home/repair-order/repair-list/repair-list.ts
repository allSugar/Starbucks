import { Component, ViewChild } from '@angular/core';
import { IonicPage, App, LoadingController, NavParams, Content } from 'ionic-angular';

import { BaseUI } from '@/../../src/directives/comm/baseui';
import { HttpService } from '@/../../src/service/HttpService';
import { LoginService } from '@/../../src/service/LoginService';
import { RoleTypeService } from '@/../../src/service/RoleTypeService';

@IonicPage()
@Component({
  selector: 'page-repair-list',
  templateUrl: 'repair-list.html',
})

export class RepairListPage extends BaseUI {

  @ViewChild(Content) content: Content;

  orderList: Array<any> = [];
  order: Object[] = [];
  RES_ROOT: string;
  navCtrl: any;
  status: string = 'orderUndoPage';
  sta: number = 0;
  pageNumber: any = 0;
  totalNumber: any;

  companyList: object[] = [];
  storeList: any = [];

  params: any = {
    method: "repair.findStoreRepairOrder",
    includeItem: 1,
    pageNumber: 1,
    statuss: '',
    repairmanId: "",
    orderRepairTimeBegin: "",
    orderRepairTimeEnd: "",
    repairCompanyId: '',
    storeInfoId: ''
  };

  paramsStatus: Array<any> = [1, 2, 3];

  infiniteScroll: any;

  menuStatus: Boolean = false;

  roleType: Number;

  /* active */

  activeDate: any = 1;

  constructor(
    public app: App,
    public navParams: NavParams,
    public http: HttpService,
    public loadingCtrl: LoadingController,
    public login: LoginService,
    public role: RoleTypeService
  ) {
    super();
    this.navCtrl = this.app.getRootNav();

    if (this.navParams.get('remove')) {
      let len = this.navParams.get('len'),
        startIndex = this.navCtrl.getViews().length - len;
      this.navCtrl.remove(startIndex, len);
    }

    this.getCompanyList()
    this.getStoreList()

    let defaultTabs = this.navParams.get("tabs");

    let loading = super.showLoading(this.loadingCtrl);

    this.role.setUserRole(val => {
      this.roleType = val;

      // 当前账户为维修员
      if (this.roleType === 8) {
        this.paramsStatus = [3];
      }

      if (defaultTabs) {
        this.tabs(defaultTabs);
      } else {
        this.getListData(loading);
      }
    });
  }

  getFormatDate(date, days) {
    function getDate(arg) {
      if (arg === undefined || arg === '') {
        return ''
      }
      let re = arg + ''
      if (re.length < 2) {
        re = '0' + re
      }
      return re
    }
    if (days === undefined || days === '') {
      days = 0
    }
    let _date = new Date(date)
    _date.setDate(_date.getDate() + days)
    let month = _date.getMonth() + 1
    let day = _date.getDate()
    return _date.getFullYear() + '-' + getDate(month) + '-' + getDate(day)
  }

  SetList() {
    if (this.content && this.content.scrollToTop) {
      this.content.scrollToTop();
    }
    /* 切换tab初始化数据 */
    this.params.repairCompanyId = ''
    this.params.storeInfoId = ''
    /* 切换tab初始化数据 */
    this.orderList = [];
    this.pageNumber = 0;
    let loading = super.showLoading(this.loadingCtrl);
    this.getListData(loading);
  }

  toggleMenu() {
    this.menuStatus = !this.menuStatus;
  }

  doInfinite(infiniteScroll) {
    this.infiniteScroll = this.infiniteScroll || infiniteScroll;
    if (this.pageNumber === this.totalNumber) {
      infiniteScroll.complete();
      infiniteScroll.enable(false);
      return false;
    }
    let loading = super.showLoading(this.loadingCtrl);
    this.getListData(loading, infiniteScroll);
  }

  getCompanyList() {
    this.companyList = [{
      company: '全部厂商',
      id: ''
    }];
    let params = {
      method: "repairCompanyManager.findRepairCompany"
    };
    this.http.get(params).subscribe(res => {
      if (!!res && res.responseCode == 174020) {
        var data = res.responseObj;
        for (var i = 0, Length = data.length; i < Length; i++) {
          this.companyList.push({
            company: data[i]["companyName"],
            id: data[i]["id"]
          })
        }
      }
    })
  }

  getStoreList() {
    this.storeList = [{
      label: '全部店铺',
      id: ''
    }];
    var params = {
      method: "store.findStoreInfoByStaff",
      staffSource: this.login.currentAccount['accountType'],
      staffType: this.roleType,
      staffUserId: this.login.id
    };
    this.http.get(params).subscribe(res => {
      if (!!res && res.responseCode == 157060) {
        let data = res.responseObj
        for (let i = 0; i < data.length; i++) {
          this.storeList.push({
            id: data[i].id,
            label: data[i].storeName,
          });
        }
      };
    }, error => {

    });
  }

  oindex: Number = 0;

  changeActive(i: Number, id, name) {
    if (this.content && this.content.scrollToTop) {
      this.content.scrollToTop();
    }
    this.params[name] = id;
    this.orderList = [];
    this.pageNumber = 0
    if (this.infiniteScroll) {
      this.infiniteScroll.enable(true);
    }

    this.oindex = i;
    this.sta = 0;

    let loading = super.showLoading(this.loadingCtrl);

    this.getListData(loading, this.infiniteScroll)
  }

  changeDateActive(item) {
    if (this.content && this.content.scrollToTop) {
      this.content.scrollToTop();
    }
    this.activeDate = item.id
    this.sta = 0;
    if (this.infiniteScroll) {
      this.infiniteScroll.enable(true);
    }

    let day = new Date(),
      begin = '',
      end = ''

    if ('value' in item) {
      begin = this.getFormatDate(day, 0);
      end = this.getFormatDate(day, item.value);
    }

    this.params.orderRepairTimeBegin = begin;
    this.params.orderRepairTimeEnd = end;

    this.orderList = [];
    this.pageNumber = 0

    let loading = super.showLoading(this.loadingCtrl);

    this.getListData(loading, this.infiniteScroll)
  }

  getListData(loading, infiniteScroll: any = false) {

    this.params.statuss = String(this.paramsStatus);
    this.params.pageNumber = this.pageNumber + 1;
    // 当前账户为维修员
    if (this.roleType === 8) {
      this.params.repairmanId = this.login.id;
      if (this.status === "orderDayPage") {
        let day = new Date().toLocaleDateString().replace(/\//g, "-");
      }
    }
    this.http.get(this.params).subscribe(res => {
      loading.dismiss();
      if (infiniteScroll) {
        infiniteScroll.complete();
      }
      if (!!res && res.responseCode == 167050) {
        this.orderList = this.orderList.concat(res.responseObj);
        this.totalNumber = res["totalNumber"] || this.totalNumber;
        this.pageNumber = res["pageNumber"];
        if (
          this.pageNumber === 1 &&
          res["totalNumber"] > 1 &&
          this.infiniteScroll) {
          this.infiniteScroll.enable(true);
        }
      };
    });
  }

  tabs(name: string) {
    if (this.status === name) {
      return false;
    }

    this.oindex = null;

    this.status = name;
    this.sta = 0;
    // 未接单
    if (name === "orderUndoPage") {
      // 当前账户为维修员
      if (this.roleType === 8) {
        this.paramsStatus = [3];
      } else {
        this.paramsStatus = [1, 2, 3];
      }
    }
    // 已接单
    if (name === "orderDayPage") {
      this.paramsStatus = [4, 5];
    }

    if (name === "OrderConductPage") {
      // 当前账户为维修员
      if (this.roleType === 8) {
        this.paramsStatus = [6, 7];
      } else {
        this.paramsStatus = [4, 5, 6, 7];
      }
    }

    // 已完成
    if (name === "OrderDonePage") {
      this.paramsStatus = [8, 9];
    }

    this.SetList();
  }

  goToOtherPage(name, item) {
    if (name) {
      this.navCtrl.push(name);
    } else {
      let name = this.status;
      if (this.status === "orderDayPage") {
        name = "orderUndoPage";
      }
      // RepairDoingPage
      // 当前账户为维修员
      if (this.roleType === 8 && this.status === "OrderConductPage") {
        name = "RepairDoingPage";
      }
      this.navCtrl.push(name, { id: item.id });
    }
  }

  HandleUpdate() {
    this.SetList();
  }

  show(n: number) {
    this.sta = this.sta == n ? 0 : n;
  }

  sliderData: object[] = [
    { label: '不限', status: false },
    { label: '商场', status: true },
    { label: '影院', status: false },
    { label: '酒店', status: false },
    { label: '超市', status: false },
    { label: '铁路', status: false },
    { label: '福利院', status: false },
    { label: '养生馆', status: false },
    { label: '酒吧', status: false }
  ];

  tabsSliderActive($index) {
    this.sliderData.forEach(function (n, i) {
      n["status"] = false;
      i == $index ? n["status"] = true : '';
    });
  }
  sort: object[] = [
    { filter: '全部' },
    { filter: '厂商名字a-z' },
    { filter: '厂商名字z-a' },
    { filter: '问题由多到少' },
    { filter: '问题由少到多' }
  ];

  mode: object[] = [
    { filter: '紧急' },
    { filter: '一般' }
  ];

  date: object[] = [
    { label: '不限', id: 1 },
    { label: '今天', id: 2, value: 0 },
    { label: '一周内', id: 3, value: -7 },
    { label: '30天内', id: 4, value: -30 }
  ];
}
