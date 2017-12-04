const TAGS_SOURCE = {
  animation: "animation",
  reactmotion: "react-motion",
  unmounting: "unmounting",
  transitionevents: "transition-events",
  reacttransitiongroup: "react-transition-group",
  animesjs: "anime.js",
  gsap: "gsap",
  ui: "ui",
  pattern: "pattern",
  api: "api",
  graphql: "graphql",
  apollo: "apollo",
  mongodb: "mongodb",
  express: "express",
  uploading: "uploading",
  svg: "svg",
  form: "form",
  formik: "formik",
  yup: "yup",
}

const withIds = (obj) => {
  Object.keys(obj).forEach((key) => {
    obj[key] = { value: obj[key], id: key }
  })

  return obj
}


export const TAGS = withIds(TAGS_SOURCE)
