import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router,private authSer:AuthService) { }

  ngOnInit() {
  }
  loadServer(id :number){
this.router.navigate(['/servers',id,'edit'],{queryParams: {allowEdit:id},fragment :'Loading..'})
  }

  logIn(){

this.authSer.logIn()
  }
  logOut(){

this.authSer.logOut()
  }
}
