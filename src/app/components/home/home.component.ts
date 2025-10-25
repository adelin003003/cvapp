import { Component, HostBinding, NgZone, OnInit } from '@angular/core';
import { fader } from '../../route-animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  animations: [
    fader
  ]
})
export class HomeComponent implements OnInit {
  
  @HostBinding('@routeAnimations') animation = true;


  messages: string[] = [
    'page',
    'CV',
    'whatever you want to call this'
  ];

  displayedText: string = '';
  messageIndex: number = 0;
  charIndex: number = 0;
  isDeleting: boolean = false;
  typingSpeed: number = 100; // ms per letter
  pauseBetween: number = 1200; // pause before deleting

  constructor(private ngZone: NgZone) {}


  ngOnInit() {
    // this.type();
  this.ngZone.runOutsideAngular(() => this.type());
  }

  type() {
    const currentMessage = this.messages[this.messageIndex];

    if (this.isDeleting) {
      this.displayedText = currentMessage.substring(0, this.charIndex - 1);
      this.charIndex--;
    } else {
      this.displayedText = currentMessage.substring(0, this.charIndex + 1);
      this.charIndex++;
    }

    let speed = this.isDeleting ? this.typingSpeed / 2 : this.typingSpeed;

    if (!this.isDeleting && this.charIndex === currentMessage.length) {
      speed = this.pauseBetween;
      this.isDeleting = true;
    } else if (this.isDeleting && this.charIndex === 0) {
      this.isDeleting = false;
      this.messageIndex = (this.messageIndex + 1) % this.messages.length;
      speed = 500;
    }

    // Run the text update back inside Angular zone
    this.ngZone.run(() => {
      this.displayedText = this.displayedText;
    });

    setTimeout(() => this.type(), speed);
  }

}
