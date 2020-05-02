import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

 @Output('featureSelect') headerSelectEvent=new EventEmitter<{feature:string}>();

  constructor() { }

  ngOnInit() {
  }

  onSelect(rec:string){
    console.log('inside the recipe '+rec)
this.headerSelectEvent.emit({feature:rec})

  }
  


}
