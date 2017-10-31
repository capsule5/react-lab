import { slugify } from "strman"
import { TAGS } from "./tags"
import RMAnimatedValue from "../components/lab/rm-animated-value/RMAnimatedValue"
import UnmountAnimation from "../components/lab/unmount-animation/UnmountAnimation"
import RMSimpleTransition from "../components/lab/rm-simple-transition/RMSimpleTransition"
import RMUnmountAnimation from "../components/lab/rm-unmount-animation/RMUnmountAnimation"

export const EXAMPLES_URL = "/examples/"

const EXAMPLES_SOURCE = [
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
]


export const EXAMPLES = EXAMPLES_SOURCE.map((example, index) => ({
  ...example,
  id: `${example}${index}`,
  path: `${EXAMPLES_URL}${slugify(example.title)}`,
}))
