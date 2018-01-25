import { Directive, OnChanges, ElementRef, Renderer, Renderer2 } from '@angular/core';
import { DomController } from 'ionic-angular';

@Directive({
  selector: '[drag]'
})
export class DragDirective implements OnChanges {

  // @Output('dragStart') success = new EventEmitter<any>();

  pressOffsetLeft: number = 0;
  pressOffsetTop: number = 0;

  startingOffsetTop: number = 0;
  startingOffsetLeft: number = 0;

  newOffsetLeft: number = 0;
  newOffsetTop: number = 0;

  dragStatus:Boolean = false;


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
    let hammer = new window['Hammer'](this.elementRef.nativeElement);

    hammer.get('press').set({ time: 0 });

    hammer.on('press', (ev) => {
      // "press"
      this.press(ev);
    });

    hammer.get('pan').set({ direction: window['Hammer'].DIRECTION_ALL });

    hammer.on('pan', (ev) => {
      // "handle"
      if(this.dragStatus) this.handlePan(ev);
    });

    hammer.on('panend', (ev) => {
      // "end"
      if(this.dragStatus) this.handleclosepan(ev);
    })

  }
  press(ev) {
    this.pressOffsetLeft = ev.center.x;
    this.pressOffsetTop = ev.center.y;
    if(this.pressOffsetLeft && this.pressOffsetTop) this.dragStatus = true;
  }

  handlePan(ev) {
    console.log('x:', ev.center.x - this.pressOffsetLeft, '--', 'y:', ev.center.y - this.pressOffsetTop);
    this.newOffsetLeft = this.startingOffsetLeft + (ev.center.x - this.pressOffsetLeft);
    this.newOffsetTop = this.startingOffsetTop + (ev.center.y - this.pressOffsetTop);

    this.domCtrl.write(() => {
      this.renderer.setElementStyle(this.elementRef.nativeElement, 'left', this.newOffsetLeft + 'px');
      this.renderer.setElementStyle(this.elementRef.nativeElement, 'top', this.newOffsetTop + 'px');
    });
  }


  handleclosepan(ev) {
    console.log('------------------------');
    console.log('x:', this.newOffsetLeft, '--', 'y:', this.newOffsetTop);
    this.startingOffsetLeft = this.newOffsetLeft;
    this.startingOffsetTop = this.newOffsetTop;
    console.log('------------------------');
    // console.log(this.elementRef, ev.center.x, ev.center.y);
  }

}
