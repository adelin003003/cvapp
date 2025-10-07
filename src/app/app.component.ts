import { Component, HostBinding } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { fader } from './route-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  animations: [
    fader
  ]
})
export class AppComponent {
  title = 'CVAngular';

  @HostBinding('@routeAnimations') animation = true;

  prepareRoute(outlet: RouterOutlet){
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
