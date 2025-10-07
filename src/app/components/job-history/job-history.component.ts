import { Component, HostBinding } from '@angular/core';
import { fader } from '../../route-animations';

@Component({
  selector: 'app-job-history',
  templateUrl: './job-history.component.html',
  styleUrl: './job-history.component.css',
  animations: [
    fader
  ]
})
export class JobHistoryComponent {

  @HostBinding('@routeAnimations') animation = true;

  hoveredIndex: number | null = null;

  onHover(index: number | null) {
    this.hoveredIndex = index;
  }

  jobHistory = [
    {
      company: "Electronics Support Division",
      startDate: "1 Sept 2025",
      endDate: "Present",
      position: "Telecommunications Construction Technician",
      divider: true
      // description: "Implemented touchscreen and web applications in Angular for a high-performance liquid chromatography (HPLC) system"
    },
    {
      company: "Telus International",
      startDate: "1 Oct 2024",
      endDate: "5 Jul 2025",
      position: "Customer Technical Support",
      divider: true
      // description: "Implemented touchscreen and web applications in Angular for a high-performance liquid chromatography (HPLC) system"
    },
    {
      company: "S.C. Waters Romania S.R.L.",
      startDate: "1 Aug 2022",
      endDate: "31 Jul 2024",
      position: "Software Developer",
      divider: false
      // description: "Implemented touchscreen and web applications in Angular for a high-performance liquid chromatography (HPLC) system"

    },
    {
      // company: "Telus",
      startDate: "1 Feb 2022",
      endDate: "31 Jul 2022",
      position: "Software Developer (Internship)",
      description: "Implemented touchscreen and web applications in Angular for a high-performance liquid chromatography (HPLC) system",
      linkMessage: "For a short demo of the HPLC system click",
      linkDemo: "https://www.youtube.com/watch?v=K2uMtS6UegI",
      divider: false
    }
  ]


  jobHistory1 = [
    {
      company: "Telus International",
      startDate: "01/10/2024",
      endDate: "Present",
      position: "Software Developer"
      // description: "Implemented touchscreen and web applications in Angular for a high-performance liquid chromatography (HPLC) system"
    },
    {
      company: "S.C. Waters Romania S.R.L.",
      startDate: "01/10/2024",
      endDate: "Present",
      position: "Software Developer",
      // description: "Implemented touchscreen and web applications in Angular for a high-performance liquid chromatography (HPLC) system"

    },
    {
      // company: "Telus",
      startDate: "01/10/2024",
      endDate: "Present",
      position: "Software Developer",
      description: "Implemented touchscreen and web applications in Angular for a high-performance liquid chromatography (HPLC) system",
      linkMessage: "For a short demo of the HPLC system click",
      linkDemo: "https://www.youtube.com/watch?v=K2uMtS6UegI"
    }
  ]

}
