import { Component, Input } from '@angular/core';

@Component({
    selector: 'time-select',
    template: `<div class="time-form">
        <div class="time-input">
            <input placeholder="开始时间" type="text">
            <div class="br"></div>
            <input placeholder="结束时间" type="text">
        </div>
        <div class="time-list">
            <div class="item active">45周</div>
            <div class="item">46周</div>
            <div class="item">46周</div>
            <div class="item">本周</div>
        </div>
        <div class="time-list">
            <div class="item active">9月</div>
            <div class="item">10月</div>
            <div class="item">11月</div>
            <div class="item">本月</div>
        </div>
        <div class="time-list">
            <div class="item active">2014年</div>
            <div class="item">2015年</div>
            <div class="item">2016年</div>
            <div class="item">本年</div>
        </div>
        <div class="sort-btn">
            <button class="btn-cancle">取消</button>
            <button class="btn-sure" type="submit">确定</button>
        </div>
    </div>`
})
export class TimeSelectTmpl {

}