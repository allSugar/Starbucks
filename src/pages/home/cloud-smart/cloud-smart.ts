import { Component, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-cloud-smart',
  templateUrl: 'cloud-smart.html',
})
export class CloudSmartPage {

  @ViewChild(Slides) slides: Slides;
  constructor(
      public navCtrl: NavController,
      public navParams: NavParams
  ) {
  }

    categorys: object[] = [
        {url: 'icon_temperature', name: '温度', number: '29℃'},
        {url: 'icon_humidity', name: '湿度', number: '26%RH'},
        {url: 'icon_battery', name: '耗电量', number: '40°'}
    ]

  status: number = 1;

  tabs(n: number) {
    this.status = n;
  }
}
