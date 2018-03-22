import { Injectable } from "@angular/core";
import { ToastController } from 'ionic-angular';

@Injectable()

export class ToastService {

    position:string = "middle";

    constructor(
        public toastCtrl: ToastController
    ) { }

    info(content: string) {
        let toast = this.toastCtrl.create({
            message: content,
            duration: 2000,
            position: this.position
        });
        toast.present();
    }
}
