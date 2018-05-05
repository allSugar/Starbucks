import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-chose-user',
  templateUrl: 'chose-user.html',
})
export class ChoseUserPage {
  UserList: any[] = [
    { id: 1, status: false },
    { id: 1, status: false },
    { id: 1, status: false }
  ];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
  }


  toggle(data) {
    data.status = !data.status;
  }

}
