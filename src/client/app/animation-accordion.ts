import { trigger, state, style, transition, animate } from '@angular/core';

export const accordionAnimation = trigger('accordionAnimation', [
  state('inactive', style({
    height: '0px',
    overflow: 'hidden'
  })),
  state('active', style({
    height: '*',
  })),
  transition('inactive => active', animate('250ms ease-in')),
  transition('active => inactive', animate('250ms ease-out'))
]);
