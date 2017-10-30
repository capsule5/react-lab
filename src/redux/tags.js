const initialState = {
  tags: [],
  selected: [],
}

const SET_SELECTED_TAGS = "SET_SELECTED_TAGS"

// Reducer
export default function reducer(state = initialState, action) {
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
