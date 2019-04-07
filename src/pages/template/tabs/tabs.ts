import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MonthComponent } from 'ion2-calendar';

@Component({
    selector: 'tabs',
    templateUrl: 'tabs.html'
})
export class TabsTmpl {

    @Input() status: number;
    @Output() goto = new EventEmitter<number>();
    @Output() DateChange = new EventEmitter<any>()

    Date: Date = new Date();

    Year: any = [];
    Month: any = [];
    Week: any = [];

    arr: any = [3, 2, 1, 0];


    timeBegin: string;
    timeEnd: string;

    constructor() {
        this.SetYear()
        this.SetMonth()
        this.SetWeek()
    }

    SetYear() {
        function GetOneYear(year) {
            return {
                timeBegin: year + '-01-01',
                timeEnd: year + '-12-31'
            }
        }
        let year = this.Date.getFullYear();
        this.arr.forEach(index => {
            let y = year - index

            this.Year.push({
                year: index ? y : '本',
                date: GetOneYear(y),
                active: false
            })
        })
    }

    SetMonth() {
        function GetOneMonth(y, m) {
            if (m < 10) {
                m = '0' + m;
            }
            let timeBegin = y + '-' + m + '-01',
                timeEnd,
                endDate = new Date(y, m, 0);

            timeEnd = y + '-' + m + '-' + endDate.getDate()
            return {
                timeBegin: timeBegin,
                timeEnd: timeEnd
            }
        }

        let year = this.Date.getFullYear(),
            month = this.Date.getMonth() + 1;
        this.arr.forEach(index => {
            let y = year,
                m = month - index;

            if (m <= 0) {
                m = 12 - m;
                y = year - 1;
            }

            this.Month.push({
                month: index ? m : '本',
                date: GetOneMonth(y, m),
                active: false
            })
        });
    }

    SetWeek() {
        function getYearWeek(a, b, c) {
            /*  
            date1是当前日期  
            date2是当年第一天  
            d是当前日期是今年第多少天  
            用d + 当前年的第一天的周差距的和在除以7就是本年第几周  
            */
            var date1 = new Date(a, parseInt(b) - 1, c),
                date2 = new Date(a, 0, 1),
                d = Math.round((date1.valueOf() - date2.valueOf()) / 86400000);
            return Math.ceil((d + ((date2.getDay() + 1) - 1)) / 7);
        };
        let year = this.Date.getFullYear(),
            month = this.Date.getMonth() + 1,
            day = this.Date.getDate(),
            week = getYearWeek(year, month, day);

        this.arr.forEach(index => {
            this.Week.push({
                week: index ? week - index : '本',
                date: {

                },
                active: false
            })
        })
    }

    tabs(n: number) {
        this.status = this.status == n ? 0 : n;
        this.goto.emit(this.status);
    }

    InitDateActive() {
        this.arr.forEach(index => {
            this.Year[index].active = false
            this.Month[index].active = false
            this.Week[index].active = false
        });
    }

    HandleDateChange(value) {
        this.InitDateActive()
        value.active = true
        this.timeBegin = value.date.timeBegin
        this.timeEnd = value.date.timeEnd
    }

    SubmitDateChange() {
        let params = {
            timeBegin: this.timeBegin,
            timeEnd: this.timeEnd
        }
        this.status = 0;
        this.DateChange.emit(params)
    }

    contain: object[] = [
        { filter: '全部' },
        { filter: '厂商名字a-z' },
        { filter: '厂商名字z-a' },
        { filter: '问题由多到少' },
        { filter: '问题由少到多' }
    ]

    oindex: Number = 0;

    changeActive(i: Number) {
        this.oindex = i;
        this.status = 0;
        this.goto.emit(this.status);
    }

    quit() {
        this.InitDateActive();
        this.timeBegin = ''
        this.timeEnd = ''
        let params = {
            timeBegin: this.timeBegin,
            timeEnd: this.timeEnd
        }
        this.DateChange.emit(params)
    }
}
