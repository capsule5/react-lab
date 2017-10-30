import { createStore, combineReducers, applyMiddleware } from "redux"
import thunkMiddleware from "redux-thunk"
import { createLogger } from "redux-logger"
// reducers
import { tagsReducer as tags } from "./tags"


const middlewares = [ thunkMiddleware ]

if (process.env.NODE_ENV !== "production") {
  const loggerMiddleware = createLogger()
  middlewares.push(loggerMiddleware)
}

const rootReducer = combineReducers({
  tags,
})

export default function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(
      ...middlewares
    )
  )

  return store
}
