import { slugify } from "strman"
import { TAGS } from "./tags"
import RMAnimatedValue from "../components/lab/rm-animated-value/RMAnimatedValue"
import UnmountAnimation from "../components/lab/unmount-animation/UnmountAnimation"
import RMSimpleTransition from "../components/lab/rm-simple-transition/RMSimpleTransition"

export const EXAMPLES_URL = "/examples/"

const EXAMPLES_SOURCE = [
  {
    component: RMAnimatedValue,
    title: "Animated Value",
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
    tags: [
      TAGS.animation,
    ],
    sources: [
      "https://stackoverflow.com/questions/40064249/react-animate-mount-and-unmount-of-a-single-component",
    ],
  },
  {
    component: RMSimpleTransition,
    title: "Simple Transition",
    tags: [
      TAGS.animation,
      TAGS.reactmotion,
    ],
    sources: [
      "https://github.com/chenglou/react-motion/blob/master/demos/demo0-simple-transition/index.html",
    ],
  },
]


export const EXAMPLES = EXAMPLES_SOURCE.map((example, index) => ({
  ...example,
  id: `${example}${index}`,
  path: `${EXAMPLES_URL}${slugify(example.title)}`,
}))
