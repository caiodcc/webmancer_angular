import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'castlegates';

  constructor(private router: Router) {}
  
  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const currentRoute = event.urlAfterRedirects;
        if (currentRoute === '/creation-page') {
          document.querySelector('footer').classList.add('hide-footer');
        } else {
          document.querySelector('footer').classList.remove('hide-footer');
        }
      }
    });
  }
}
