import { slugify } from "strman"
import keyIndex from "react-key-index"
import { TAGS } from "./tags"

import RMAnimatedValue from "../components/lab/rm-animated-value/RMAnimatedValue"
import UnmountAnimation from "../components/lab/unmount-animation/UnmountAnimation"
import RMSimpleTransition from "../components/lab/rm-simple-transition/RMSimpleTransition"
import RMUnmountAnimation from "../components/lab/rm-unmount-animation/RMUnmountAnimation"
import TransitionGroupAnimeJs from "../components/lab/transition-group-anime-js/TransitionGroupAnimeJs"
import TransitionGroupGsap from "../components/lab/transition-group-gsap/TransitionGroupGsap"
import AnimationList from "../components/lab/animation-list/AnimationList"

export const EXAMPLES_URL = "/examples/"


const EXAMPLES_SOURCE = [
  {
    component: AnimationList,
    title: "Animation List",
    desc: "",
    tags: [
      TAGS.animation,
      TAGS.reacttransitiongroup,
      TAGS.gsap,
      TAGS.unmounting,
    ],
    links: [
      "https://greensock.com/gsap",
    ],
  },
  {
    component: TransitionGroupGsap,
    title: "TransitionGroup / GSAP",
    desc: "",
    tags: [
      TAGS.animation,
      TAGS.reacttransitiongroup,
      TAGS.gsap,
      TAGS.unmounting,
    ],
    links: [
      "https://www.freshtilledsoil.com/whats-the-most-developer-friendly-react-animation-library/",
      "https://reactjs.org/docs/animation.html",
      "https://greensock.com/gsap",
    ],
  },
  {
    component: TransitionGroupAnimeJs,
    title: "TransitionGroup / Anime.js",
    desc: "",
    tags: [
      TAGS.animation,
      TAGS.reacttransitiongroup,
      TAGS.animesjs,
      TAGS.unmounting,
    ],
    links: [
      "https://www.freshtilledsoil.com/whats-the-most-developer-friendly-react-animation-library/",
      "https://reactjs.org/docs/animation.html",
      "http://animejs.com/",
    ],
  },
  {
    component: UnmountAnimation,
    title: "Unmount Animation",
    desc: "Based on transition events",
    tags: [
      TAGS.animation,
      TAGS.unmounting,
      TAGS.transitionevents,
    ],
    links: [
      "https://stackoverflow.com/questions/40064249/react-animate-mount-and-unmount-of-a-single-component",
      "https://reactjs.org/docs/events.html#transition-events",
    ],
  },
  {
    component: RMUnmountAnimation,
    title: "Unmount Animation with RM",
    desc: "",
    tags: [
      TAGS.animation,
      TAGS.reactmotion,
      TAGS.unmounting,
    ],
    links: [],
  },
  {
    component: RMSimpleTransition,
    title: "Simple Transition",
    desc: "",
    tags: [
      TAGS.animation,
      TAGS.reactmotion,
    ],
    links: [
      "https://github.com/chenglou/react-motion/blob/master/demos/demo0-simple-transition/index.html",
    ],
  },
  {
    component: RMAnimatedValue,
    title: "Animated Value",
    desc: "",
    tags: [
      TAGS.animation,
      TAGS.reactmotion,
    ],
    links: [
      "https://github.com/chenglou/react-motion",
      "https://react.rocks/tag/react-motion",
    ],
  },
]


export const EXAMPLES = EXAMPLES_SOURCE.map(example => ({
  ...example,
  id: slugify(example.title),
  path: `${EXAMPLES_URL}${slugify(example.title)}`,
  links: keyIndex(example.links, 1),
}))
