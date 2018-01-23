import { Directive, Input, Output, EventEmitter, OnChanges, QueryList, ElementRef, Renderer, Renderer2 } from '@angular/core';
import { DomController } from 'ionic-angular';

@Directive({
  selector: '[drag]'
})
export class DragDirective implements OnChanges {
  
  @Output('dragsuccess') success = new EventEmitter<any>();

  startingOffsetTop:number = 0;
  startingOffsetLeft:number = 0;

  constructor(
    public elementRef:ElementRef, 
    public renderer:Renderer,
     public domCtrl:DomController,
    public renderer2:Renderer2) {

  }

  ngOnChanges(changes){    
    
  }

  ngAfterViewInit(){

    let hammer = new window['Hammer'](this.elementRef.nativeElement);
    console.log(this.elementRef.nativeElement);
    hammer.get('pan').set({ direction: window['Hammer'].DIRECTION_ALL });

    hammer.on('pan', (ev) => {
      this.handlePan(ev);
    });

    hammer.on('pandown',(ev)=>{
    	this.handledownPan(ev);
    })

    hammer.on('panup',(ev)=>{
    	this.handleupPan(ev);
    })

    hammer.on('panend',(ev)=>{
      this.handleclosepan(ev);
    })

  }

  handlePan(ev){
    console.log("handle");
  	let newLeft = ev.center.x - 45;
    let newTop = ev.center.y - 90;

    this.domCtrl.write(() => {
        this.renderer.setElementStyle(this.elementRef.nativeElement, 'left', newLeft + 'px');
        this.renderer.setElementStyle(this.elementRef.nativeElement, 'top', newTop + 'px');
    });
  }

  handledownPan(ev){
    console.log("down");
  	let offsetTop = ev.target.offsetTop 
    let offsetLeft = ev.target.offsetLeft

  }

  handleupPan(ev){
    console.log("up");
  	let offsetTop = ev.target.offsetTop;
  	let offsetLeft = ev.target.offsetLeft;
  }

  handleclosepan(ev){
    console.log("end");
  }

}
