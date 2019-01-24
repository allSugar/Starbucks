import { Component, Input, OnChanges } from '@angular/core';

import { RepairOrder } from '../../home/repair-order/repair-detail/untils';
import { RES_ROOT } from '@/../../src/providers/httpUrl';

@Component({
  selector: 'report-tab-element',
  templateUrl: 'report-tab.html'
})

export class ReportTabTmpl {

  @Input() id: any = {};
  data: any = {};
  RES_ROOT: string;

  constructor(
    public order: RepairOrder
  ) {
    this.RES_ROOT = RES_ROOT;
  }

  ngOnChanges() {
    this.GetInfo()
  }

  GetInfo() {
    this.order.Init(this.id).then(res => {
      this.data = res;
      this.SetDefault()
      console.log(this)
    })
  }

  SetDefault() {
    let orderItemList = this.data.orderItemList
    if (this.data.orderItemList) {
      orderItemList.map(item => {
        this.InitTotalHourData(item)
        this.InitOrderItemTypes(item)
      })
    } else {
      this.data.orderItemList = []
    }
  }

  InitTotalHourData(self) {
    if (self.maintenanceHours) {
      self.maintenanceHours = parseInt(self.maintenanceHours)
      this.data.totalHours = this.data.totalHours || 0;
      this.data.totalHours += self.maintenanceHours;
    }
  }
  InitOrderItemTypes(self) {
    self.storeRepairOrderItemTypes.map(item => {
      item.name = item.printRepairWarehouse.replace(',', ' > ')
    })
  }
}