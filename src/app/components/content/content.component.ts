import { Component, HostBinding } from '@angular/core';
import { fader } from '../../route-animations';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrl: './content.component.css',
  // animations: [
  //   fader
  // ]
})
export class ContentComponent {

  // @HostBinding('@routeAnimations') animation = true;

}
