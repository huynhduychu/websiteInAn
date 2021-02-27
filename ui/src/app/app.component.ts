import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Song Viet';
  onActivate(e, outlet){
    outlet.scrollTop = 0;   
  }
  constructor(public router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        ga('set', 'inansongviet.com', event.urlAfterRedirects);
        ga('send', 'inansongviet.com');
      }
    });
  }
}
