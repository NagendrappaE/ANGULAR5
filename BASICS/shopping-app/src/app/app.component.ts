import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shopping-app';

loadedFeature:string

onNavigate(inp){

  this.loadedFeature=inp.feature
console.log('inside the onNavigate method ...'+inp.feature)
}
}
