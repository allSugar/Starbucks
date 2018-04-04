import { Directive, ViewChild, ElementRef } from '@angular/core';
import { DomController } from 'ionic-angular';

@Directive({
    selector: '[content]'
})

export class ContentDirective {
    @ViewChild('container') mapElement: ElementRef;
    constructor(
        public elementRef: ElementRef,
        public domCtrl: DomController
    ) {
    }
}