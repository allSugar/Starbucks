import { Component } from '@angular/core';
import { IonicPage, App, NavParams } from 'ionic-angular';

import { HttpService } from '../../../service/HttpService';

@IonicPage()
@Component({
  selector: 'page-problem-detail',
  templateUrl: 'problem-detail.html',
})
export class ProblemDetailPage {

  navCtrl: any;
  detailData: Object = [];
  constructor(
    public app: App,
    public navParams: NavParams,
    public http: HttpService
  ) {
    this.navCtrl = this.app.getRootNav();
    if (this.navParams.get('remove')) {
      let len = this.navParams.get('len'),
        startIndex = this.navCtrl.getViews().length - len;
      this.navCtrl.remove(startIndex, len);
    }
    this.getListData();
  }

  getListData() {
    let id;
    if (this.navParams.get("id")) {
      id = this.navParams.get("id");
    }
    let params = { method: "repair.getStoreRepairTemporaryBillById", clientId: '14a01fdab38b4bf3b93781e20aa3777b', id: id };
    this.http.get(params).subscribe(res => {
      if (!!res && res.responseCode == 165040) {
        this.detailData = res.responseObj;
      };
    }, error => {

    });
  }
  goToOtherPage() {
    this.navCtrl.push('RepaireCategoryPage');
  }

}
