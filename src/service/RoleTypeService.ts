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
        let roleid = this.currentAccount["id"];
        switch (roleid) {
            case 18:
                this.roleType = 2;
                break;
            case 13:
                this.roleType = 3;
                break;
            case 14:
                this.roleType = 4;
                break;
            default:
                break;
        }
        return this.roleType;
    }
}