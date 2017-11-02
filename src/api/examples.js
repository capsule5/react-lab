import { slugify } from "strman"
import keyIndex from "react-key-index"
import { TAGS } from "./tags"

import RMAnimatedValue from "../components/lab/rm-animated-value/RMAnimatedValue"
import UnmountAnimation from "../components/lab/unmount-animation/UnmountAnimation"
import RMSimpleTransition from "../components/lab/rm-simple-transition/RMSimpleTransition"
import RMUnmountAnimation from "../components/lab/rm-unmount-animation/RMUnmountAnimation"
import TransitionGroupAnimeJs from "../components/lab/transition-group-anime-js/TransitionGroupAnimeJs"
import TransitionGroupGsap from "../components/lab/transition-group-gsap/TransitionGroupGsap"

export const EXAMPLES_URL = "/examples/"


const EXAMPLES_SOURCE = [
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
    sources: [
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
    sources: [
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
    sources: [
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
    sources: [],
  },
  {
    component: RMSimpleTransition,
    title: "Simple Transition",
    desc: "",
    tags: [
      TAGS.animation,
      TAGS.reactmotion,
    ],
    sources: [
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
    sources: [
      "https://github.com/chenglou/react-motion",
      "https://react.rocks/tag/react-motion",
    ],
  },
]


export const EXAMPLES = EXAMPLES_SOURCE.map((example, index) => ({
  ...example,
  id: `example_${index}`,
  path: `${EXAMPLES_URL}${slugify(example.title)}`,
  sources: keyIndex(example.sources, 1),
}))
