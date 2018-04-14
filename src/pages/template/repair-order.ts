import { Component, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'repair-order-element',
  template: `<div class="repair-emement">
    <div class="media-bar">
      <em class="icon-house"></em>
      <em class="f-left">北京钟楼百货星巴克</em>
      <em class="icon-arrow-right"></em>
      <em class="shop-name">苏南方圆</em>
      <em class="icon-light"></em>
    </div>
    <div class="media-body" (click)='goToOtherPage()'>
      <div class="media-title">
        <em class="urgent-general" *ngIf="status == 0">一般</em>
        <em class="urgent-crash" *ngIf="status == 3">紧急</em>
        <em class="f-left">8个问题</em>
        <em class="media-time">{{data.createTime}}</em>
      </div>
      <div class="media-img">
        <img src="assets/imgs/change-after.png" alt="">
        <img src="assets/imgs/change-after.png" alt="">
        <img src="assets/imgs/change-after.png" alt="">
        <img src="assets/imgs/change-after.png" alt="">
        <img src="assets/imgs/change-after.png" alt="">
        <em class="point-img"></em>
      </div>
    </div>
    <div class="media-info">
      <p>系统单号：{{data.orderCode}}</p>
      <p>400单号：201710212569</p>
    </div>
  </div>`
})

export class RepairOrderTmpl {
  /*
  状态：0 -- 一般  3 -- 紧急
  */
  @Input() status: Number = 0;
  @Output() goto = new EventEmitter<any>();
  @Input() data: any;
  goToOtherPage() {
    this.goto.emit();
  }
}