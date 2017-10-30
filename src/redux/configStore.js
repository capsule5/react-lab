import { createStore, combineReducers, applyMiddleware } from "redux"
import thunkMiddleware from "redux-thunk"
import { createLogger } from "redux-logger"
// reducers
import potagers from "./potagers/potagersReducer"


const middlewares = [ thunkMiddleware ]

if (process.env.NODE_ENV !== "production") {
  const loggerMiddleware = createLogger()
  middlewares.push(loggerMiddleware)
}

const rootReducer = combineReducers({
  potagers,
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
