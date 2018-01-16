import { Http, Headers, RequestOptions } from "@angular/http";
import { Injectable } from "@angular/core";
import "rxjs/add/operator/toPromise";
import "rxjs/Rx";
import { Observable } from "rxjs";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/distinctUntilChanged";
import "rxjs/add/operator/map";
import "rxjs/add/operator/switchMap";
import "rxjs/add/observable/throw";

@Injectable()
export class HttpService {
    constructor(private http: Http) {
    }

    headers = new Headers({ 'Content-Type': 'application/x-www' });
    options = new RequestOptions({ headers: this.headers });
    //get请求
    get(url: string): Observable<any> {
        return this.http.get(url, {
            headers: new Headers({
                "Accept": "application/json",
                "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
            })
        })
            .map(res => res.json());
    }

    //post请求
    post(url: string, body: any): Observable<any> {
        return this.http.post(url, body, {
            headers: new Headers({
                "Accept": "application/json",
                "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
            })
        })
            .map(res => res.json());
    }
}
