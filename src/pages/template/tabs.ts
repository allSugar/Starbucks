import {Component, Input, Output } from '@angular/core';

@Component({
    selector: 'tabs',
    template: `<div class="tabs">
            <ul class="tabs-list tabs-third tabs-sort">
                <li class="tab-btn" [ngClass]="{ 'active':status == 1 }" (click)="tabs(1)">
                    <em class="text">排序</em>
                </li>
                <li class="tab-btn" [ngClass]="{ 'active':status == 2 }" (click)="tabs(2)">
                    <em class="text">管辖范围</em>
                </li>
                <li class="tab-btn" [ngClass]="{ 'active':status == 3 }" (click)="tabs(3)">
                    <em class="text">时间</em>
                </li>
                <li class="tab-sort" [ngClass]="{ 'active':status == 4 }" (click)="tabs(4)">
                    <em class="text">分类</em>
                </li>
            </ul>
            <div class="tabs-content">
                <ul class="ranking-list" [ngClass]="{ 'hide':status != 1 }" (click)="tabs(1)">
                    <li class="ranking-item">全部</li>
                    <li class="ranking-item">厂商名字a-z</li>
                    <li class="ranking-item active">厂商名字z-a</li>
                    <li class="ranking-item">问题由多到少</li>
                    <li class="ranking-item">问题由少到多</li>
                </ul>
                <ul class="jurisdiction" [ngClass]="{ 'hide':status != 2 }" (click)="tabs(2)">
                    <li class="item">
                        <img src="assets/imgs/select/select-all.png" alt="">
                        <p class="text active">全部店面</p>
                    </li>
                    <li class="item">
                        <img src="assets/imgs/select/select-all.png" alt="">
                        <p class="text">我管辖的</p>
                    </li>
                </ul>
                <div class="time-form" [ngClass]="{ 'hide':status != 3 }" (click)="tabs(3)">
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
                </div>
            </div>
        </div>`
})
export class TabsTmpl {
    @Input() status: number;

    tabs(n: number) {
        this.status = n;
    }
}