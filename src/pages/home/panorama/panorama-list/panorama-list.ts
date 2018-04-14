import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HttpService } from '../../../../service/HttpService';
import { RES_ROOT } from '../../../../providers/httpUrl';

@IonicPage()
@Component({
  selector: 'page-panorama-list',
  templateUrl: 'panorama-list.html',
})
export class PanoramaListPage {

    storeList: Array<any> = [];
    store: Object[] = [];
    RES_ROOT: string;

  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      public http: HttpService
  ) {
      this.getData();
      this.RES_ROOT = RES_ROOT;
  }
  getData () {
    var params = { method: 'store.findStoreInfoByStaff',
        clientId: '14a01fdab38b4bf3b93781e20aa3777b',
    }
    this.http.get(params).subscribe(res => {
        if (!!res && res.responseCode == 157060) {
            this.storeList = res.responseObj;
            console.log(res)
            for (let i = 0; i < this.storeList.length; i++) {
                this.store.push({
                    name: this.storeList[i].storeName,
                    url1: this.storeList[i].shopPhotoList[0],
                    url2: this.storeList[i].shopPhotoList[1]
                });
            }
        };
    }, error => {

    });

  }
}
