import { Component, HostBinding, HostListener, OnInit } from '@angular/core';
import { fader } from '../../route-animations';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
  animations: [
    fader
  ]
})
export class SkillsComponent implements OnInit {

  @HostBinding('@routeAnimations') animation = true;

  infoBtnVisible = true;

  bigCircle = ["Java", "C#", "C/C++", "OOP", "SQL", "Agile", "Jira", "Bitbucket", "GitHub", "Codeigniter", "PHP"];
  smallCircle = ["CSS", "HTML", "TypeScript", "Angular", "JavaScript"]
  angleBig = 0;
  angleSmall = 0;
  itemCountBigCircle = this.bigCircle.length;
  itemCountSmallCircle = this.smallCircle.length;
  semiBigCircleRadius = 350; // Adjust based on carousel-container size
  semiSmallCircleRadius = 150; // Adjust based on carousel-container size


  // counter = 0;
  // maxRepetitions = 5;

  // repetitiveFunction() {
  //   if (this.counter >= this.maxRepetitions) return;

  //   console.log(this.counter);
  //   this.counter++;

  //   setTimeout(this.repetitiveFunction(), 1000);
  // }

  // repetitiveFunction(delay: number) {
  //   console.log("Function executed!");
  //   this.rotateCarousel(1);
  //   // Set a timeout to call this function again after the delay
  //   setTimeout(() => {
  //     this.repetitiveFunction(delay); // Recursive call
  //   }, delay);
  // }





  counter: number = 0;
  maxRepetitions: number = 15; // Number of repetitions
  delay: number = 2000; // Delay in milliseconds

  constructor() { }

  ngOnInit(): void {
    // this.startRepetitiveFunction();
  }

  startRepetitiveFunction() {
    if (this.counter < this.maxRepetitions) {
      this.counter++;
      // console.log(`Function executed! Count: ${this.counter}`);

      setTimeout(() => {
        this.startRepetitiveFunction(); // Recursive call to repeat
        this.rotateCarousel(1);
      }, this.delay);
    } else {
      // console.log("Repetition complete.");
    }
  }






  // ngOnInit() {
  // this.repetitiveFunction(1000);
  // for (let i = 0; i < 5; i++) {
  //   setTimeout(() => {
  //     this.rotateCarousel(1);
  //     console.log(i);
  //   }, 2000);
  // }
  // }

  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'ArrowRight') {
      this.rotateCarousel(1);
    } else if (event.key === 'ArrowLeft') {
      this.rotateCarousel(-1);
    }
  }

  rotateCarousel(direction: number): void {
    this.angleBig += direction * (180 / (this.itemCountBigCircle - 1)); // 180 degrees semicircle
    this.angleBig %= 360;
    this.angleSmall += direction * (180 / (this.itemCountSmallCircle - 1)); // 180 degrees semicircle
    this.angleSmall %= 360;
    console.log(this.infoBtnVisible);
    // console.log(this.angleBig, " - ", this.angleSmall);
  }

  getBigCircleTransform(index: number): string {
    const itemAngle = this.angleBig + index * (180 / (this.itemCountBigCircle));
    const x = Math.cos(itemAngle * (Math.PI / 90)) * this.semiBigCircleRadius * 1.1;
    const y = Math.sin(itemAngle * (Math.PI / 90)) * this.semiBigCircleRadius;
    return `translate(${x}px, ${y}px)`;
  }

  getSmallCircleTransform(index: number): string {
    const itemAngle = this.angleSmall + index * (180 / (this.itemCountSmallCircle));
    const x = Math.cos(itemAngle * (Math.PI / 90)) * this.semiSmallCircleRadius * 1.1;
    const y = Math.sin(itemAngle * (Math.PI / 90)) * this.semiSmallCircleRadius;
    return `translate(${x}px, ${y}px)`;
  }


  informationButtonClick(){
    this.infoBtnVisible = !this.infoBtnVisible;
    console.log(this.infoBtnVisible);
  }

}
