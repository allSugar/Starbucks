import { Component } from '@angular/core';
import { IonicPage, App, NavParams } from 'ionic-angular';
import { HttpService } from '../../../../../service/HttpService';

@IonicPage()
@Component({
    selector: 'page-order-done',
    templateUrl: 'order-done.html',
})
export class OrderDonePage {

    list: Array<any> = [];
    order: Object[] = [];
    RES_ROOT: string;
    tabStatus: number = 0;
    navCtrl: any;

    constructor(
        public app: App,
        public navParams: NavParams,
        public http: HttpService
    ) {
        this.material();
        this.hours();
        this.navCtrl = this.app.getRootNav();
    }
    material() {
        let params = { method: 'repair.findStoreRepairOrderGoods' }
        this.http.get(params).subscribe(res => {
            if (!!res && res.responseCode == 167050) {
                this.list = res.responseObj;
            }
        });
    }
    hours() {
        let params = { method: 'repair.reportMaintenanceHours' }
        this.http.get(params).subscribe(res => {
            if (!!res && res.responseCode == 167050) {
                this.list = res.responseObj;
            }
        });
    }
    tabs(i: number) {
        this.tabStatus = i;
    }
    goToOtherPage(name) {
        this.navCtrl.push(name);
    }
    goToDetailPage() {
        this.navCtrl.push('ProblemDetailPage');
    }

}
