import { slugify } from "strman"
import { TAGS } from "./tags"
import ReactMotion from "../components/Examples/ReactMotion"
import UnmountAnimation from "../components/Examples/UnmountAnimation"

const EXAMPLES_URL = "/examples/"

const EXAMPLES_SOURCE = [
  {
    component: ReactMotion,
    title: "React Motion",
    tags: [
      TAGS.animation,
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
]

export const EXAMPLES = EXAMPLES_SOURCE.map((example, index) => ({
  ...example,
  id: `${example}${index}`,
  path: `${EXAMPLES_URL}${slugify(example.title)}`,
}))
