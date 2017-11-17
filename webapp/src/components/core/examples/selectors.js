import { createSelector } from "reselect"
import { EXAMPLES } from "api/examples"

const selectedTagsState = state => state.tags.selected

export const examplesSelector = createSelector(
  selectedTagsState,
  (selectedTags) => {
    const examples = selectedTags.length > 0 ?
      EXAMPLES.filter(e => (selectedTags.map(t => t.value).every(t => e.tags.map(ta => ta.value).includes(t)))) :
      EXAMPLES

    return examples
  }
)


export const availableTagsSelector = createSelector(
  selectedTagsState,
  examplesSelector,
  (selectedTags, examples) => {
    const sortByValue = (a, b) => {
      if (a.value < b.value) {
        return -1
      }
      if (a.value > b.value) {
        return 1
      }
      return 0
    }

    const availableTags = examples
      .map(e => e.tags) // get only tags 
      .reduce((a, b) => a.concat(b), []) // concat all tags
      .filter((tag, index, self) => self.findIndex(t => t.value === tag.value) === index) // remove duplicated tags 
      .sort(sortByValue)

    // compare with selectedTags & add isSelected key
    availableTags.forEach((tag) => {
      tag.isSelected = selectedTags.map(t => t.value).includes(tag.value)
    })

    return availableTags
  }
)

export default createSelector(
  selectedTagsState,
  examplesSelector,
  availableTagsSelector,
  (selectedTags, examples, availableTags) => ({
    selectedTags,
    examples,
    availableTags,
  })
)

