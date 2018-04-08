import { Directive, OnChanges, ViewChild, Output, EventEmitter, ElementRef, Renderer, Renderer2 } from '@angular/core';
import { DomController, Content } from 'ionic-angular';
import { ContentDirective } from './content';

/* ionic-angular Content 使用节点 或者 ContentDirective */ 

@Directive({
  selector: '[drag]'
})
export class DragDirective implements OnChanges {

  greeter: ContentDirective;
  @ViewChild(Content) content: Content;
  @Output() dragend = new EventEmitter<any>();

  pressOffsetLeft: number = 0;
  pressOffsetTop: number = 0;

  startingOffsetTop: number = 0;
  startingOffsetLeft: number = 0;

  dragStatus: Boolean = false;

  constructor(
    public elementRef: ElementRef,
    public renderer: Renderer,
    public domCtrl: DomController,
    public renderer2: Renderer2,
    greeter: ContentDirective
  ) {
    this.greeter = greeter;
    console.log(this);
  }

  ngOnChanges() { }

  ngAfterViewInit() {
    let hammer: any = new window['Hammer'](this.elementRef.nativeElement);
    console.log(this.greeter);

    hammer.get('press').set({ time: 0 });

    // "press"
    hammer.on('press', (ev) => {
      this.press(ev);
    });

    hammer.get('pan').set({ direction: window['Hammer'].DIRECTION_ALL });

    // "handle"
    hammer.on('pan', (ev) => {
      if (this.dragStatus) this.handlePan(ev);
    });

    // "end"
    hammer.on('panend', (ev) => {
      if (this.dragStatus) this.handleclosepan(ev);
    })

  }

  press(ev) {
    this.pressOffsetLeft = ev.center.x;
    this.pressOffsetTop = ev.center.y;
    if (this.pressOffsetLeft && this.pressOffsetTop) this.dragStatus = true;
  }

  handlePan(ev) {
    let dragOffsetLeft: number = ev.center.x,
      dragOffsetTop: number = ev.center.y,
      newOffsetLeft: number = 0,
      newOffsetTop: number = 0;

    newOffsetLeft = this.startingOffsetLeft + (dragOffsetLeft - this.pressOffsetLeft);
    newOffsetTop = this.startingOffsetTop + (dragOffsetTop - this.pressOffsetTop);

    this.pressOffsetLeft = dragOffsetLeft;
    this.pressOffsetTop = dragOffsetTop;

    this.startingOffsetLeft = newOffsetLeft;
    this.startingOffsetTop = newOffsetTop;

    this.domCtrl.write(() => {
      this.renderer.setElementStyle(this.elementRef.nativeElement, 'left', newOffsetLeft + 'px');
      this.renderer.setElementStyle(this.elementRef.nativeElement, 'top', newOffsetTop + 'px');
    });
  }


  handleclosepan(ev) {
    this.dragend.emit(ev);
  }
}
