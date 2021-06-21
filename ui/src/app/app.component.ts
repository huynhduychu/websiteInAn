import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

declare var gtag

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
  
  constructor(router: Router) {
    const navEndEvent$ = router.events.pipe(
      filter(e => e instanceof NavigationEnd)
    );
    navEndEvent$.subscribe((e: NavigationEnd) => {
      gtag('config', 'G-000BZ6QX53', {'inansongviet.com':e.urlAfterRedirects});
    });
  }
}
