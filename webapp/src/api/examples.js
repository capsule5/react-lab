import { slugify, keyIndex } from "utils/helpers"
import { TAGS } from "./tags"

import RMAnimatedValue from "../components/lab/rm-animated-value/RMAnimatedValue"
import UnmountAnimation from "../components/lab/unmount-animation/UnmountAnimation"
import RMSimpleTransition from "../components/lab/rm-simple-transition/RMSimpleTransition"
import RMUnmountAnimation from "../components/lab/rm-unmount-animation/RMUnmountAnimation"
import TransitionGroupAnimeJs from "../components/lab/transition-group-anime-js/TransitionGroupAnimeJs"
import TransitionGroupGsap from "../components/lab/transition-group-gsap/TransitionGroupGsap"
import AnimationList from "../components/lab/animation-list/AnimationList"
import ModalX from "../components/lab/modal-x/ModalX"
import RenderPropsVsHoc from "../components/lab/render-props-vs-hoc/RenderPropsVsHoc"
import GraphQL from "../components/lab/graphql/GraphQL"
import UploadImage from "../components/lab/upload-image/UploadImage"


const EXAMPLES_SOURCE = [
  {
    component: UploadImage,
    title: "GraphQL / Apollo upload",
    desc: "",
    tags: [
      TAGS.api,
      TAGS.graphql,
      TAGS.apollo,
      TAGS.express,
      TAGS.mongodb,
      TAGS.uploading,
    ],
    links: [
      "https://github.com/jaydenseric/apollo-upload-client",
      "https://github.com/jaydenseric/apollo-upload-server",
    ],
    github: "upload-image/UploadImage",
  },
  {
    component: GraphQL,
    title: "GraphQL / Apollo basics",
    desc: "Get/Create/Delete a MongoDB links collection through GraphQL mutation/query",
    tags: [
      TAGS.api,
      TAGS.graphql,
      TAGS.apollo,
      TAGS.express,
      TAGS.mongodb,
    ],
    links: [
      "https://www.howtographql.com/",
      "https://github.com/graphql/express-graphql/issues/14",
      "https://dev-blog.apollodata.com/react-graphql-tutorial-mutations-764d7ec23c15",
    ],
    github: "graphql/GraphQL",
  },
  {
    component: RenderPropsVsHoc,
    title: "RenderProps vs HOC",
    desc: "Comparing RenderProps and HOC patterns with a scroll watch example",
    tags: [
      TAGS.pattern,
    ],
    links: [ "https://medium.com/tandemly/im-breaking-up-with-higher-order-components-44b0df2db052" ],
    github: "render-props-vs-hoc/RenderPropsVsHoc",
  },
  {
    component: ModalX,
    title: "Modal",
    desc: "",
    tags: [
      TAGS.ui,
      TAGS.unmounting,
      TAGS.transitionevents,
    ],
    links: [],
    github: "modal-x/ModalX",
  },
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
    github: "animation-list/AnimationList",
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
    github: "transition-group-gsap/TransitionGroupGsap",
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
    github: "transition-group-anime-js/TransitionGroupAnimeJs",
  },
  {
    component: UnmountAnimation,
    title: "Unmount Animation",
    desc: "Based on transition event onTransitionEnd",
    tags: [
      TAGS.animation,
      TAGS.unmounting,
      TAGS.transitionevents,
    ],
    links: [
      "https://stackoverflow.com/questions/40064249/react-animate-mount-and-unmount-of-a-single-component",
      "https://reactjs.org/docs/events.html#transition-events",
    ],
    github: "unmount-animation/UnmountAnimation",
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
    github: "rm-unmount-animation/RMUnmountAnimation",
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
    github: "rm-simple-transition/RMSimpleTransition",
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
    github: "rm-animated-value/RMAnimatedValue",
  },
]

export const EXAMPLES_URL = "/examples/"
const GITHUB_URL = "https://github.com/jobteaser/react-lab/blob/master/webapp/src/components/lab/"

export const EXAMPLES = EXAMPLES_SOURCE.map(example => ({
  ...example,
  id: slugify(example.title),
  path: `${EXAMPLES_URL}${slugify(example.title)}`,
  links: example.links && keyIndex(example.links, 1),
  github: example.github && `${GITHUB_URL}${example.github}.js`,
}))
