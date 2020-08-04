import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes';

appStatus=new Promise((resolve,reject)=>{

  setTimeout(()=>{
    return resolve('critical')
  // return  reject('nnn')
  },2000)

})

  inpValue=''
  servers =[{
    instanceType:'medium',
     name:'Database Server',
     status:'stable',
     started:new Date()
  },
  {
    instanceType:'large',
     name:'Production Server',
     status:'critical',
     started:new Date()
  },
  {
    instanceType:'small',
     name:'Development Server',
     status:'offline',
     started:new Date()
  },
  {
    instanceType:'small',
     name:'Testing Environment Server',
     status:'stable',
     started:new Date()
  }];


  getServerCSSClass(serStatus:String){

    console.log(serStatus)

    var cssClass=''
    if(serStatus=='stable')
    {
      cssClass='list-group-item-primary'
    }else if(serStatus=='offline'){
      cssClass='list-group-item-warning'
    }else if (serStatus=='critical'){
      cssClass='list-group-item-danger'
    }
    return  cssClass
  }

  addServer(){
    this.servers.push(

      {
        instanceType:'small',
         name:'UAT Server',
         status:'offline',
         started:new Date()
      }
    )
  }
}
