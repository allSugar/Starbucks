import {Component} from '@angular/core';
import {IonicPage, App, NavParams} from 'ionic-angular';

@IonicPage()
@Component({
    selector: 'page-chart-list',
    templateUrl: 'chart-list.html',
})
export class ChartListPage {

    navCtrl: any;
    category: Object[] = [
        {url: 'repair-frequency', name: '维修频率', page: 'FrequencyPage'},
        {url: 'warranty-number', name: '报修次数', page: 'RepairNumberPage'},
        {url: 'repair-maintain', name: '维修分类', page:'SortPage'},
        {url: 'easy-hart', name: '易损部位', page:'VulnerablePartsPage'},
        {url: 'weekly', name: '每周问题', page:'WeeklyIssuesPage'},
        {url: 'efficiency', name: '厂商效率', page:'EfficiencyPage'},
        {url: 'reason', name: '物损原因', page: 'DamagePage'},
        {url: 'remains', name: '遗存问题', page:'RemainIssuesPage'}
    ];

    constructor(
        public app: App,
        public navParams: NavParams
    ) {
        this.navCtrl = this.app.getRootNav();
    }

    goToOtherPage(item) {
        if (item.page) this.navCtrl.push(item.page)
    }

}
