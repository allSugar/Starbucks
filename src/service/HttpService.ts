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
import * as querystring from 'querystring';
import { API_ROOT } from "../providers/httpUrl";
import { LoginService } from "./LoginService";

@Injectable()
export class HttpService {

    constructor(
        private http: Http,
        public login: LoginService
    ) { }

    headers = new Headers({
        "Accept": "application/json",
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
    });
    options = new RequestOptions({ headers: this.headers });

    //get请求
    get(params: any, ROOT: Boolean = true): Observable<any> {
        if (typeof params !== "string") {
            params = params || {};
            let userInfo = this.login.userInfo;
            if (userInfo && params.method !== "userManager.login") {
                params.clientId = this.login.userInfo["clientId"];
            }
        }
        alert(JSON.stringify(params.clientId));
        let url = ROOT ? (API_ROOT + "?" + querystring.stringify(params)) : params;
        return this.http.get(url, { headers: this.headers }).map(res => res.json());
    }

    //post请求
    post(params: any): Observable<any> {
        params = params || {};
        let userInfo = this.login.userInfo;
        if (userInfo) {
            params.clientId = this.login.userInfo["clientId"];
        }
        return this.http.post(API_ROOT, querystring.stringify(params), { headers: this.headers }).map(res => res.json());
    }
}
