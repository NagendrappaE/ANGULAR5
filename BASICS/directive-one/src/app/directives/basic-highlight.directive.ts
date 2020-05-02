import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective  implements OnInit{
  

  constructor(private elemnetRef:ElementRef) { }

  ngOnInit(){
    this.elemnetRef.nativeElement.style.background='green' 
   }
}
