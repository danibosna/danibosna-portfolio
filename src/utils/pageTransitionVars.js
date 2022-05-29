export const PAGE_TRANSITION = {
  DURATION: 0.6,
  EASE: [0.83, 0, 0.17, 1],
};

const easing = [0.175, 0.85, 0.42, 0.96];
const TOTAL_TIME = PAGE_TRANSITION.DURATION;
const delay = 0.5;
const duration = TOTAL_TIME - delay;

const pageMotionProps = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: PAGE_TRANSITION.DURATION,
      ease: PAGE_TRANSITION.EASE,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: PAGE_TRANSITION.DURATION,
      delay: PAGE_TRANSITION.DURATION,
      ease: PAGE_TRANSITION.EASE,
    },
  },
};

export const menuAnimationVariant = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
    },
  },
};

export const itemsAnimationVariant = {
  initial: {
    y: '-100%',
    transition: {
      duration: duration,
      opacity: 0,
      ease: easing,
    },
  },
  animate: {
    y: '0%',
    transition: {
      duration: duration,
      opacity: 1,
      ease: easing,
    },
  },
};

export default pageMotionProps;
