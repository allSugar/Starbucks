import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'category',
  template: `<div class="category">
    <div class="item-list">
      <div class="item" *ngFor="let cate of categorys" (click)="goToOtherPage(cate)">
        <div class="item-img">
          <img src="assets/imgs/category/{{ cate.url }}.png" />
        </div>
        <p class="title">{{ cate.name }}</p>
      </div>
    </div>
  </div>`
})

export class CategoryTmpl {

  @Input() categorys: object;
  @Output() goto = new EventEmitter<any>();

  goToOtherPage(item) {
    this.goto.emit(item);
  }
}
