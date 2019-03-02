import { Injectable } from "@angular/core";

import { LoginService } from './LoginService';

@Injectable()

export class RoleTypeService {

    roleType: any;
    currentAccount: Object;

    constructor(
        public login: LoginService
    ) {
    }

    setUserRole(callback: any) {
        if (!this.login.id) {
            this.login.isLoginFun(val => {
                callback(this.SetRole());
            });
            return false;
        }
        callback(this.SetRole());
    }
    SetRole() {
        this.currentAccount = this.login.currentAccount;
        let name = this.currentAccount["accountName"];
        switch (name) {
            case '店长':
                this.roleType = 6;
                break;
            case '店员':
                this.roleType = 2;
                break;
            case '维修主管':
                this.roleType = 3;
                break;
            case '维修员':
                this.roleType = 4;
                break;
            default:
                break;
        }
        return this.roleType;
    }
}