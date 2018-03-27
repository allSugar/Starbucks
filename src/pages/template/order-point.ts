import { Component, Input, NgModule } from '@angular/core';

@Component({
    selector: 'order-point',
    template: `<div class="point">
    <div class="point-title">
      <span>北京苏南方圆建设有限公司</span>
      <em class="icon-arrow-right  f-none"></em>
    </div>
    <div class="point-content">
      <div class="point-img">
        <img alt="" src="assets/imgs/change-before.png">
      </div>
      <div class="point-body">
        <p class="point-describe">
          <span class="address">A区8栋一层吧台区</span>
          <span class="currency">¥ 500</span>
        </p>
        <p class="point-tag">灯具／灯不亮了</p>
        <p class="point-action">
          <span>5张照片</span>
          <span class="question">灯管自然损坏</span>
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
}