import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nav-button',
  templateUrl: './nav-button.component.html',
  styleUrl: './nav-button.component.css'
})
export class NavButtonComponent {

  @Input() navigation: string = '';
  @Input() buttonText: string = '';

}
