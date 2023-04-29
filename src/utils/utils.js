export const textAnimation = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: (custom) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 },
  }),
};
export const buttonAnimation = {
  hidden: {
    y: -600,
    opacity: 0,
  },
  visible: (custom) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 },
  }),
};
export const imageAnimation = {
  hidden: {
    scale: 0,
  },
  visible: {
    scale: 1,
    transition: { duration: 1, ease: "easeInOut" },
  },
};
export const blockAnimation = {
  hidden: {
    scale: 0,
  },
  visible: (custom) => ({
    scale: 1,
    transition: { duration: 0.5, ease: "easeInOut", delay: custom * 0.2 },
  }),
};

export const textAnimationY = {
  hidden: {
    y: -100,
    opacity: 0,
  },
  visible: (custom) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 },
  }),
};
