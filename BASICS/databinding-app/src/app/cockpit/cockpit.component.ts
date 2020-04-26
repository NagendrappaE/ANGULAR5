import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Output() onaddcock = new EventEmitter<{ cockContextTxt: string }>()

 @Output() onprintcock=new EventEmitter<{cockContextTxt:string}>()

  sname
  usn


  constructor() { }

  ngOnInit() {
  }

  addStudent() {
    this.onaddcock.emit({ cockContextTxt: 'ADDED student ' + this.sname + 'USN' + this.usn })
    console.log('the student name' + this.sname)
  }
  printStudent() {
    this.onprintcock.emit({
      cockContextTxt:'PRINTED name and usn'+this.sname+'usn'+this.usn
    })
    
    console.log('the student name' + this.sname)
  }


}
