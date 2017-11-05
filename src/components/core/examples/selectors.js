import { createSelector } from "reselect"
import { EXAMPLES } from "api/examples"

const selectedTagsState = state => state.tags.selected

export const examplesSelector = () => createSelector(
  selectedTagsState,
  (selectedTags) => {
    const examples = selectedTags.length > 0 ?
      EXAMPLES.filter(e => (selectedTags.map(t => t.value).every(t => e.tags.map(ta => ta.value).includes(t)))) :
      EXAMPLES

    return examples
  }
)

