import { Component, HostBinding } from '@angular/core';
import { fader } from '../../route-animations';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrl: './personal-info.component.css',
  animations: [
    fader,
    trigger('fadeInOut', [
    transition(':enter', [
      style({ opacity: 0 }),
      animate('300ms ease-in', style({ opacity: 1 }))
    ]),
    transition(':leave', [
      animate('300ms ease-out', style({ opacity: 0 }))
    ])
  ])
  ]
})
export class PersonalInfoComponent {

  @HostBinding('@routeAnimations') animation = true;


  jobHistory1 = [
    {
      sectionTitle: "Contact Information",
      line1: "Telus International",
      line2: "01/10/2024",
      line3: "Present",
      line4: "Software Developer",
      visible: false
    },
    {
      sectionTitle: "Profile",
      line1: "Telus International",
      line2: "01/10/2024",
      line3: "Present",
      visible: false
    },
    {
      sectionTitle: "Education",
      line1: "Telus International",
      visible: false
    },
    {
      sectionTitle: "Hobbies & Interests",
      line1: "Telus International",
      line3: "Present",
      line4: "Software Developer",
      visible: false
    }
  ]


  onClickSectionText(index: any) {
    this.jobHistory1[index].visible = !this.jobHistory1[index].visible;
  }

}
