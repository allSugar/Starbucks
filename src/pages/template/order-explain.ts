import { Component, Input } from '@angular/core';

@Component({
    selector: 'order-explain',
    template: `<div class="explain">
    <div class="explain-head" *ngIf="status == 0">
        <span class="icon-explain-yellow"></span>
        <span class="title">说明</span>
        <span class="time">2017.05.20 12:30</span>
    </div>
    <div class="explain-head" *ngIf="status == 1">
        <span class="icon-explain-blue"></span>
        <span class="title">完成说明</span>
        <span class="time">2017.05.20 12:30</span>
    </div>
    <div class="explain-content">客厅灯管线头断了</div>
    <div class="explain-footer">
      <img src="assets/imgs/change-after.png" alt="">
      <img src="assets/imgs/change-after.png" alt="">
      <img src="assets/imgs/change-after.png" alt="">
    </div>
  </div>`
})

export class OrderExplainTmpl {
    /*
   状态：0 -- 说明  1 -- 完成说明
   */
    @Input() status: number = 0;
}