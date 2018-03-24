import {Component} from '@angular/core';
import {IonicPage, App, NavParams} from 'ionic-angular';

/**
 * Generated class for the CloudListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-cloud-list',
    templateUrl: 'cloud-list.html',
})
export class CloudListPage {

    navCtrl: any;
    cloud: any[] = [
        {url: 'icon_customer', name: '客区', page: 'GuestPage'},
        {url: 'icon_backstage', name: '后区'},
        {url: 'icon_bar', name: '客区吧台'},
        {url: 'icon_page', name: '项目图纸'},
        {url: 'icon_data', name: '项目资料'}
    ];

    constructor(public app: App,
                public navParams: NavParams) {
        this.navCtrl = this.app.getRootNav();
    }

    goToOtherPage(item) {
        if (item.page) this.navCtrl.push(item.page)
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad CloudListPage');
    }

}
