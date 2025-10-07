import {
  trigger,
  transition,
  style,
  query,
  group,
  animate,
  keyframes,
  animateChild
} from '@angular/animations';

export const fader = trigger('routeAnimations', [
  // transition('* <=> *', [
  //   style({ position: 'relative' }),
  //   query(':enter, :leave', [
  //     style({
  //       position: 'absolute',
  //       top: 0,
  //       left: 0,
  //       width: '100%',
  //     }),
  //   ]),
  //   query(':enter', [style({ left: '-100%' })]),
  //   query(':leave', animateChild(), { optional: true }),  //adding here solved my problem
  //   group([
  //     query(':leave', [
  //       animate('300ms ease-out', style({ left: '100%', opacity: 0 })),
  //     ]),
  //     query(':enter', [animate('300ms ease-out', style({ left: '0%' }))]),
  //   ]),
  // ]),

  // transition('* <=> *', [
  //   style({
  //     // position: 'absolute',
  //     top: 0,
  //     left: 0,
  //     width: '100%',
  //     opacity: 0,

  //   }),
  //   animate(1000),
  // ]),

  transition(':enter', [
    style({
      opacity: 0,
      // position: 'absolute',
      top: 0,
      // left: '200px',
      // left: '-100%',
    }),
    animate(300),
  ]),
  transition(':leave', [
    animate(
      100,
      style({
        opacity: 0,
        // right: '200px',
        // position: 'absolute',

      }),
    ),
  ]),



])