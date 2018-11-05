import { Component, Input, Output, EventEmitter } from '@angular/core';

import { ToastService } from '@/../../src/service/ToastService';
import { HttpService } from '@/../../src/service/HttpService';

@Component({
  selector: 'repair-order-element',
  templateUrl: 'repair-order.html'
})

export class RepairOrderTmpl {
  /*
  状态：1 -- 一般  3 -- 紧急
  */

  @Input() data: any;
  @Input() roletype: any;
  @Input() tabs: String;
  @Output() goto = new EventEmitter<any>();
  @Output() update = new EventEmitter<any>();

  params: any = {
    method: "repair.operationStoreRepairOrder",
    id: "",
    status: ""
  };

  constructor(
    public toast: ToastService,
    public http: HttpService
  ) {
  }

  goToOtherPage(name) {
    this.goto.emit(name);
  }

  HandleAddRepair() {
    this.params["id"] = (this.data as Object)["id"];
    this.params["status"] = 4;

    this.http.get(this.params).subscribe(res => {
      if (res.responseCode == "167020") {
        this.update.emit();
      } else {
        this.toast.info("接单异常，请稍后再试！");
      }
    });
  }

  HandleGoRepair() {
    this.params["id"] = (this.data as Object)["id"];
    this.params["status"] = 5;

    this.http.get(this.params).subscribe(res => {
      if (res.responseCode == "167020") {
        this.update.emit();
      } else {
        this.toast.info("出发状态异常，请稍后再试！");
      }
    });
  }

  HandleArriveRepair() {
    this.params["id"] = (this.data as Object)["id"];
    this.params["status"] = 6;

    this.http.get(this.params).subscribe(res => {
      if (res.responseCode == "167020") {
        this.update.emit();
      } else {
        this.toast.info("到达状态异常，请稍后再试！");
      }
    });
  }
}