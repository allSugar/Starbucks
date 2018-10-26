import { Component, Input, Output, EventEmitter } from '@angular/core';
import { App, LoadingController } from 'ionic-angular';
import { HttpService } from '../../service/HttpService';
import { BaseUI } from '../../directives/comm/baseui';
import { ToastService } from '../../service/ToastService';


@Component({
  selector: 'order-point',
  template: `<div class="point">
    <div class="point-title">
      <span>北京钟楼百货星巴克</span>
      <em class="icon-arrow-right f-none"></em>
    </div>
    <div class="point-content">
      <div class="point-img" (click)="goToOtherPage('OrderImgDetailPage')">
        <img alt="" src="assets/imgs/change-before.png">
      </div>
      <div class="point-body" (click)="goToOtherPage('ProblemDetailPage')">
        <p class="point-describe">
          <span class="address">A区8栋一层吧台区</span>
          <span *ngIf="done" class="currency">¥ 500</span>
          <em *ngIf="!done" class="urgent-general">一般</em>
        </p>
        <p class="point-tag">灯具／灯不亮了</p>
        <p class="point-action">
          <span>5张照片</span>
          <span *ngIf="done" class="question">灯管自然损坏</span>
        </p>
      </div>
    </div>
    <div class="point-retract" *ngIf="retract">
      <div class="btn-retract" (click)="deleteStoreRepairOrder()">撤回</div>
    </div>
  </div>`
})

export class OrderPointTmpl extends BaseUI {

  @Input() retract: Boolean = true;
  @Input() done: Boolean = true;
  @Input() listdata: any = {};
  @Input() detail: Boolean = true;

  @Output() goto = new EventEmitter<any>();

  navCtrl: any;

  constructor(
    public app: App,
    public loadingCtrl: LoadingController,
    public http: HttpService,
    public toast: ToastService
  ) {
    console.log(this);
    super();
    this.navCtrl = this.app.getRootNav();
  }

  goToOtherPage(name) {
    if (name === "OrderImgDetailPage" || !this.done) {
      this.goto.emit(name);
    }
  }
  deleteStoreRepairOrder() {
    let loading = super.showLoading(this.loadingCtrl),
      len = 1,
      startIndex = this.navCtrl.getViews().length - len,
      params = { method: "repair.deleteStoreRepairOrderById", ids: [this.listdata.id] };

    this.http.get(params).subscribe(res => {
      loading.dismiss();
      if (res.responseCode == "167040") {
        this.toast.info("撤销成功！", () => this.navCtrl.push("RepairListPage", { remove: true, len: 2 }));
      }
      if (res.responseCode == "167042") {
        this.toast.info("撤销异常，请稍后再试！");
      }
    });
  }
}