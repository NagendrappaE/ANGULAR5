import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-viewstudent',
  templateUrl: './viewstudent.component.html',
  styleUrls: ['./viewstudent.component.css']
})
export class ViewstudentComponent implements OnInit {

   @Input() content
  constructor() { }

  ngOnInit() {
  }

}
