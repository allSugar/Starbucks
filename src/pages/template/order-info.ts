import { Component, Input } from '@angular/core';

@Component({
    selector: 'order-info',
    template: `<div class="info">
    <div class="info-title">订单详情</div>
    <ul class="info-list info-hide">
      <li class="info-item">
        <em class="title">订单号</em>
        <strong class="text">W_017092_002</strong>
      </li>
      <li class="info-item">
        <em class="title">400单号</em>
        <strong class="text">40019892876462</strong>
      </li>
      <li class="info-item">
        <em class="title">门店名称</em>
        <strong class="text">钟楼百货星巴克</strong>
      </li>
      <li class="info-item">
        <em class="title">维修公司</em>
        <strong class="text">北京苏南方圆建设有限公司</strong>
      </li>
      <li class="info-item">
        <em class="title">维修员</em>
        <strong class="text">李斌</strong>
      </li>
      <li class="info-item">
        <em class="title">维修主管</em>
        <strong class="text">张俊伟</strong>
      </li>
      <li class="info-item">
        <em class="title">维修监理</em>
        <strong class="text">石海杰</strong>
      </li>
      <li class="info-item">
        <em class="title">店长</em>
        <strong class="text">蒙伟贤</strong>
      </li>
      <li class="info-item">
        <em class="title">下单时间</em>
        <strong class="text">2017-12-20 12:20</strong>
      </li>
    </ul>
    <em class="icon-arrow-top"></em>
  </div>`
})
export class OrderInfoTmpl {
    @Input() data: any;
    @Input() arr: any;
    constructor(){
      console.log(this);
    }
}