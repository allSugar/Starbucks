import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-drawing-map',
  templateUrl: 'drawing-map.html',
})
export class DrawingMapPage {

  help: Boolean = false;
  easel: Boolean = false;
  
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
  }

  handleFilter(name: string) {
    if (!name) {
      this.help = false, this.easel = false;
      return false;
    }
    this[name] = !this[name];
    name == 'easel' ? this.help = false : this.easel = false;
  }
}
