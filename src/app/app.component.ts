import {Component} from '@angular/core'

@Component({
  selector: 'pm-root',
  template:` 
    <div><h1>{{pagetitle}}</h1>
        <pm-products></pm-products>
    </div>`
})

export class AppComponent{
  pagetitle: string = 'Acme Product Management';
}