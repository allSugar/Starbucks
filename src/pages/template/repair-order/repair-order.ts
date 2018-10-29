import { Component, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'repair-order-element',
  templateUrl: 'repair-order.html'
})

export class RepairOrderTmpl {
  /*
  状态：1 -- 一般  3 -- 紧急
  */
  @Input() status: Number = 0;
  @Output() goto = new EventEmitter<any>();
  @Input() data: any;
  goToOtherPage(name) {
    this.goto.emit(name);
  }
}