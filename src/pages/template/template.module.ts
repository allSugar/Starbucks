import { NgModule } from '@angular/core';
import { IonicModule } from "ionic-angular";
import { MyApp } from "../app/app.component";

import { OrderInfoTmpl } from './order-info';

const COMPONENTS = [
    OrderInfoTmpl
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [IonicModule.forRoot(MyApp)],
  exports: [...COMPONENTS],
})
export class TmplModule {
}
