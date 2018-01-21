import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, Content, ToastController } from 'ionic-angular';
import { HttpService } from "../../model/HttpService";

@IonicPage()
@Component({
  selector: 'alpha-list-page',
  templateUrl: 'alpha-list.html'
})

export class AlphaListPage {

  @ViewChild(Content) content: Content;
  /*搜索的关键字*/
  searchInput: string = '';
  /*请求通讯录的值*/
  contactsUrl = './contacts.json';
  /*字母的初始化*/
  aLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  letters = [];
  formatContacts: any = []; //按首字母顺序格式化后的数组
  searchingItems = []; //搜索显示的数组
  searchLetters = [];
  isSearching = false;
  callback: any;
  toast: any;
  remitBanks: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public toastCtrl: ToastController,
    public elementRef: ElementRef,
    private http: HttpService
  ) {

    this.http.get("assets/data/contacts.json").subscribe(res => {

      this.remitBanks = res;
      console.log(this);
      this.aLetters.forEach((res, index) => {
        if (this.remitBanks[res] && this.remitBanks[res].lenght != 0) {
          this.formatContacts.push(this.remitBanks[res]);
          this.letters.push(res);
        }
      })

    }, error => {

    });
  }
	/**
	 *取消结果触发的值
	 */
  onCancelSearch(event) {
    this.isSearching = false;
    this.searchingItems = [];
  }
  /**
   *定位查找首字母对应的通讯录
   */
  scrollToTop(letter, event) {
    console.log(letter, event);
    this.show(letter, 1000);
    if (this.elementRef.nativeElement.querySelector("ion-item-divider#" + letter)) {
      let scrollTop = this.elementRef.nativeElement.querySelector("ion-item-divider#" + letter).offsetTop;
      this.content.scrollTo(0, scrollTop, 300);
    }
  }
	/**
	 *通过关键字查询搜索的结果值
	 */
  goSearchResult(ev: any) {
    this.isSearching = true;
    let val = ev.target.value;
    this.searchInput = val;
    if (val && val.trim() != '') {
      this.searchLetters = [];
      this.searchingItems = [];
      this.letters.forEach((res, index) => {
        let search = this.formatContacts[index].filter((item) => {
          return (item.name.indexOf(val) > -1);
        })
        if (search != null && search.length > 0) {
          this.searchLetters.push(res);
          this.searchingItems.push(search);
        }
      })
    } else {
      this.isSearching = false;
    }
  }

  goBack(data) {
    this.callback(data).then(() => {
      this.navCtrl.pop();
    });
  }

  ionViewWillEnter() {
    this.callback = this.navParams.get("callback")
  }

  onCancel() {
    this.navCtrl.pop();
  }

  onClear($event) {
    this.searchInput = '';
  }

  show = (message: string = '操作完成', duration: number = 2500) => {
    this.toast = this.toastCtrl.create({
      message: message,
      duration: duration,
      position: 'middle',
      cssClass: 'hj-toast'
    });
    this.toast.present();
  };
}