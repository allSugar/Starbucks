import { Component } from '@angular/core';
import { IonicPage, App, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-drawing-map',
  templateUrl: 'drawing-map.html',
})
export class DrawingMapPage {

  navCtrl: any;
  help: Boolean = false;
  easel: Boolean = false;
  status:any;
  edge = {
    top: false,
    left: true,
    bottom: false,
    right: true
  };

  constructor(
    public app: App,
    public navParams: NavParams
  ) {
    this.navCtrl = this.app.getRootNav();
  }

  handleFilter(name: string) {
    if (!name) {
      this.help = false;
      this.easel = false;
      return false;
    }
    this[name] = !this[name];
    name == 'easel' ? this.help = false : this.easel = false;
  }
  checkEdge() {
    this.edge = this.edge;
  }
  dragend(event, block) {
    if (!!block) block.resetPosition();
  }
  goToOtherPage(pageName: String) {
    this.status = 1;
    this.navCtrl.push(pageName);
  }
}
