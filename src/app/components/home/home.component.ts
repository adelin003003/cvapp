import { Component, HostBinding } from '@angular/core';
import { fader } from '../../route-animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  animations: [
    fader
  ]
})
export class HomeComponent {
  
  @HostBinding('@routeAnimations') animation = true;

}
