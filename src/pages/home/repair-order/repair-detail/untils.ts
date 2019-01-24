import { Injectable } from "@angular/core";
import { ToastService } from '@/../../src/service/ToastService';
import { HttpService } from '@/../../src/service/HttpService';

@Injectable()

export class RepairOrder {
  id: any;
  constructor(
    public toast: ToastService,
    public http: HttpService
  ) { }

  asyncGet(callback) {
    return new Promise(resolve => callback.call(this, this.id, resolve))
  }

  async Init(id) {
    this.id = id;
    const res = await Promise.all([
      this.asyncGet(this.GetRepairOrder),
      this.asyncGet(this.GetOrderdetail)
    ])
    let obj = res[0];
    if (res[1]) {
      obj['orderItemList'] = res[1]
    }
    return Promise.resolve(obj);
  }

  GetOrderdetail(id, resolve) {
    let params = {
      method: 'repair.findStoreRepairOrderItem',
      storeRepairOrderId: id
    }
    this.http.get(params).subscribe(res => {
      if (res && res.responseCode == '168030') {
        res = res.responseObj
        resolve(res)
      } else {
        resolve()
      }
    })
  }

  GetRepairOrder(id, resolve) {
    let params = {
      method: 'repair.getStoreRepairOrderById',
      id: id
    }
    this.http.get(params).subscribe(res => {
      if (res && res.responseCode == '167060') {
        res = res.responseObj
        resolve(res)
      } else {
        resolve()
      }
    });
  }
}