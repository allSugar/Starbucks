import { Component } from '@angular/core';
import { IonicPage, App, NavParams } from 'ionic-angular';

import { ToastService } from '@/../../src/service/ToastService';
import { HttpService } from '@/../../src/service/HttpService';
import { LoginService } from '@/../../src/service/LoginService';
import { RoleTypeService } from '@/../../src/service/RoleTypeService';

@IonicPage()
@Component({
    selector: 'page-order-done',
    templateUrl: 'order-done.html',
})
export class OrderDonePage {

    data: any;
    list: Array<any> = [];

    RES_ROOT: string;
    tabStatus: number = 0;
    navCtrl: any;
    roleType: any;

    trackList: Array<any> = [];

    constructor(
        public app: App,
        public navParams: NavParams,
        public toast: ToastService,
        public login: LoginService,
        public http: HttpService,
        public role: RoleTypeService
    ) {

        this.navCtrl = this.app.getRootNav();

        this.role.setUserRole(val => {
            this.roleType = val;
        });

        this.data = this.navParams.get('data');
        this.GetOrderdetail()

        this.GetRepairOrder();

        this.material();
        this.hours();
        console.log(this)
    }


    GetOrderdetail() {
        let params = {
            method: 'repair.getStoreRepairOrderById',
            id: this.data.id
        }
        this.http.get(params).subscribe(res => {
            if (res.responseCode == '167060') {
                res = res.responseObj
                res.orderItemList = this.data.orderItemList
                this.data = res
            }
        })
    }

    GetRepairOrder() {
        let id = this.data ? this.data.id : ''
        let params = {
            method: 'repair.getStoreRepairOrderById',
            id: id
        }
        this.http.get(params).subscribe(res => {
        });
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

    goToDetailPage(event) {
        this.navCtrl.push('ProblemDetailPage');
    }
}
