import { Component } from '@angular/core';
//import {Router} from '@angular/router';
@Component({
  selector: 'my-app',
  template: `<nav-bar></nav-bar>
              <router-outlet></router-outlet>
              `
})
export class AppComponent {
}
