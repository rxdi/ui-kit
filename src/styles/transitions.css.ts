import { css } from '@rxdi/lit-html';

export const TRANSITIONS = css`
  /* ========================================================================
   Component: Transition
 ========================================================================== */
  /* Toggle (Hover + Focus)
 ========================================================================== */
  /*
 * 1. Prevent tab highlighting on iOS.
 */
  .transition-toggle {
    /* 1 */
    -webkit-tap-highlight-color: transparent;
  }

  .transition-toggle:focus {
    outline: none;
  }
  /* Transitions
 ========================================================================== */
  /*
 * The toggle is triggered on touch devices by two methods:
 * 1. Using :focus and tabindex
 * 2. Using :hover and a touchstart event listener registered on the document
 *    (Doesn't work on Surface touch devices)
 *
 * Note: Transitions don't work with postion-center-* classes because they also use transform,
 *       therefore it's recommended to use an extra div for the transition.
 */
  .transition-fade,
  [class*='transition-scale'],
  [class*='transition-slide'] {
    transition: 0.3s ease-out;
    transition-property: opacity, transform, filter;
    opacity: 0;
  }
  /*
 * Fade
 */
  .transition-toggle:hover .transition-fade,
  .transition-toggle:focus .transition-fade,
  .transition-active.active .transition-fade {
    opacity: 1;
  }
  /*
 * Scale
 */
  .transition-scale-up {
    transform: scale(1, 1);
  }
  .transition-scale-down {
    transform: scale(1.1, 1.1);
  }
  /* Show */
  .transition-toggle:hover .transition-scale-up,
  .transition-toggle:focus .transition-scale-up,
  .transition-active.active .transition-scale-up {
    opacity: 1;
    transform: scale(1.1, 1.1);
  }
  .transition-toggle:hover .transition-scale-down,
  .transition-toggle:focus .transition-scale-down,
  .transition-active.active .transition-scale-down {
    opacity: 1;
    transform: scale(1, 1);
  }
  /*
 * Slide
 */
  .transition-reset {
    transform: translateY(0) translateX(0);
  }
  .transition-slide-top {
    transform: translateY(-100%);
  }
  .transition-slide-bottom {
    transform: translateY(100%);
  }
  .transition-slide-left {
    transform: translateX(-100%);
  }
  .transition-slide-right {
    transform: translateX(100%);
  }
  .transition-slide-top-small {
    transform: translateY(-10px);
  }
  .transition-slide-bottom-small {
    transform: translateY(10px);
  }
  .transition-slide-left-small {
    transform: translateX(-10px);
  }
  .transition-slide-right-small {
    transform: translateX(10px);
  }
  .transition-slide-top-medium {
    transform: translateY(-50px);
  }
  .transition-slide-bottom-medium {
    transform: translateY(50px);
  }
  .transition-slide-left-medium {
    transform: translateX(-50px);
  }
  .transition-slide-right-medium {
    transform: translateX(50px);
  }
  /* Show */
  .transition-toggle:hover
    [class*='transition-slide']
    .transition-toggle:focus
    [class*='transition-slide'],
  .transition-active.active [class*='transition-slide'] {
    opacity: 1;
    transform: translate(0, 0);
  }
  /* Opacity modifier
 ========================================================================== */
  .transition-opaque {
    opacity: 1;
  }
  /* Duration modifiers
 ========================================================================== */
  .transition-slow {
    transition-duration: 0.7s;
  }
`;
