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


  item = [
    {
      sectionTitle: "Contact Information",
      line1: "Email: adelin_andrei_99@yahoo.ro",
      line2: "Phone: (+40) 748045003",
      line3: "LinkedIn",
      line4: "https://www.linkedin.com/in/adelin-andrei-%C8%99oaic%C4%83-a4b6352b7/",
      // line4: "Software Developer",
      visible: false
    },
    {
      sectionTitle: "Profile",
      line1: "I studied at the Faculty of Mathematics and Informatics from Brasov, graduated in Applied Informatics. I'm looking forward to learning new programming languages and improve my software development skills.",
      // line2: "01/10/2024",
      // line3: "Present",
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


  // onClickSectionText(index: any) {
  //   this.jobHistory1[index].visible = !this.jobHistory1[index].visible;
  // }

}
