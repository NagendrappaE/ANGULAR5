import { Directive, OnInit, ElementRef, Renderer2, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlighter]'
})
export class BetterHighlighterDirective implements OnInit {
  
  @Input() defaultColor:string
  @Input() highlightedColor:string

  @HostBinding('style.background') bgcolor:string=this.defaultColor

  constructor(private eleRef:ElementRef,private render:Renderer2) { }
  ngOnInit() {

  //  this.render.setStyle(this.eleRef.nativeElement,'background','orange')
      }

      @HostListener('mouseenter') mouseover(eventData:Event){
       // this.render.setStyle(this.eleRef.nativeElement,'background','orange')
       this.bgcolor=this.highlightedColor

      } 

      @HostListener('mouseleave') mouseleave(eventData:Event){
       // this.render.setStyle(this.eleRef.nativeElement,'background','pink')
this.bgcolor=this.defaultColor 
      } 
}
