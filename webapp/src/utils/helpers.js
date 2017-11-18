import Hashids from "hashids"

// allows passing multiple HOCS to cmp
export const compose = (...funcs) => {
  if (funcs.length === 0) {
    return arg => arg
  }

  if (funcs.length === 1) {
    return funcs[0]
  }

  return funcs.reduce((a, b) => (...args) => a(b(...args)))
}

// slugify
export const slugify = (str) => {
  str = str.replace(/^\s+|\s+$/g, "") // trim
  str = str.toLowerCase()

  // remove accents, swap ñ for n, etc
  const from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;"
  const to = "aaaaeeeeiiiioooouuuunc------"
  for (let i = 0, l = from.length; i < l; i++) {
    str = str.replace(new RegExp(from.charAt(i), "g"), to.charAt(i))
  }

  str = str.replace(/[^a-z0-9 -]/g, "") // remove invalid chars
    .replace(/\s+/g, "-") // collapse whitespace and replace by -
    .replace(/-+/g, "-") // collapse dashes

  return str
}

// key index
export const keyIndex = (arr, label) => {
  const hashids = new Hashids()
  const x = parseInt(label, 10)
  let digits = [ 9, 9, x ]
  let obj = {}

  const result = arr.map((value, index) => {
    digits.push(index)
    if (typeof value === "object") {
      let i = 0
      Object.keys(value).forEach((key) => {
        let y = ""
        digits.push(i)
        y = `_${key}Id`
        value[y] = hashids.encode(digits)
        digits = digits.slice(0, 6)
        i = i + 1
      })
      return value
    }
    obj = {
      value,
      id: hashids.encode(digits),
    }
    digits = digits.slice(0, 5)
    return obj
  })
  
  return result
}
