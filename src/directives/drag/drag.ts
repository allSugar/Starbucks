import { Directive, Input, Output, EventEmitter, OnChanges, ElementRef, Renderer, Renderer2 } from '@angular/core';
import { DomController } from 'ionic-angular';

@Directive({
  selector: '[drag]'
})
export class DragDirective implements OnChanges {

  @Output('dragStart') success = new EventEmitter<any>();

  startingOffsetTop: number = 0;
  startingOffsetLeft: number = 0;

  constructor(
    public elementRef: ElementRef,
    public renderer: Renderer,
    public domCtrl: DomController,
    public renderer2: Renderer2
  ) {

  }

  ngOnChanges(changes) {
    console.log(changes);
  }

  ngAfterViewInit() {

    this.renderer.setElementStyle(this.elementRef.nativeElement, 'position', 'absolute');
    this.renderer.setElementStyle(this.elementRef.nativeElement, 'left', this.startingOffsetTop + 'px');
    this.renderer.setElementStyle(this.elementRef.nativeElement, 'top', this.startingOffsetLeft + 'px');

    let hammer = new window['Hammer'](this.elementRef.nativeElement);
    hammer.get('pan').set({ direction: window['Hammer'].DIRECTION_ALL });
    console.log(hammer);
    hammer.on('pan', (ev) => {
      // "handle"
      this.handlePan(ev);
    });

    hammer.on('panstart', (ev) => {
      // "down"
      this.handledownPan(ev);
    })

    hammer.on('panup', (ev) => {
      // "up"
      this.handleupPan(ev);
    })

    hammer.on('panend', (ev) => {
      // "end"
      this.handleclosepan(ev);
    })

  }

  handlePan(ev) {

    let x1 = ev.target.offsetLeft,
      y1 = ev.target.offsetTop,
      x2 = ev.center.x,
      y2 = ev.center.y;

    let newLeft = ev.center.x;
    let newTop = ev.center.y - 48;

    this.domCtrl.write(() => {
      this.renderer.setElementStyle(this.elementRef.nativeElement, 'left', newLeft + 'px');
      this.renderer.setElementStyle(this.elementRef.nativeElement, 'top', newTop + 'px');
    });
  }

  handledownPan(ev) {
    console.log(ev.center.x - 10, ev.center.y);
    let offsetTop = ev.target.offsetTop
    let offsetLeft = ev.target.offsetLeft

  }

  handleupPan(ev) {
    let offsetTop = ev.target.offsetTop;
    let offsetLeft = ev.target.offsetLeft;
  }

  handleclosepan(ev) {
    console.log(this.elementRef, ev.center.x, ev.center.y);
  }

}
