import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { CategoryTmpl } from './category';
import { CategoryLargeTmpl } from './category-lg';

const COMPONENTS = [
    CategoryTmpl,
    CategoryLargeTmpl
];

@NgModule({
    declarations: [...COMPONENTS],
    imports: [IonicPageModule.forChild(COMPONENTS)],
    exports: [...COMPONENTS],
})
export class CategoryModule {
}