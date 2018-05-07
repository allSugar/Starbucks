import { Component, Input, Output, EventEmitter } from '@angular/core';

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
      <div class="btn-retract">撤回</div>
    </div>
  </div>`
})

export class OrderPointTmpl {

  @Input() retract: Boolean = true;
  @Input() done: Boolean = true;
  @Input() detail: Boolean = true;
  @Output() goto = new EventEmitter<any>();

  constructor() { }

  goToOtherPage(name) {
    if (name === "OrderImgDetailPage" || !this.done) {
      this.goto.emit(name);
    }
  }
}