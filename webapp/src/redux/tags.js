const initialState = {
  selected: [],
}

const SET_SELECTED_TAGS = "SET_SELECTED_TAGS"

// Reducer
export const tagsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SELECTED_TAGS:
      return {
        ...state,
        selected: action.payload,
      }
    default:
      return state
  }
}

// Actions
export const setSelectedTags = tags => ({
  type: SET_SELECTED_TAGS,
  payload: tags,
})


export const selectTag = tag => (dispatch, getState) => {
  const newTags = [ ...getState().tags.selected ]
  if (!newTags.some(t => t.value === tag.value)) {
    newTags.push(tag)
    dispatch(setSelectedTags(newTags))
  }
}

export const deselectTag = tag => (dispatch, getState) => {
  const newTags = getState().tags.selected.filter(t => t.value !== tag.value)
  dispatch(setSelectedTags(newTags))
}
