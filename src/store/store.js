import {
    applyMiddleware,
    combineReducers,
    legacy_createStore as createStore,
} from "redux"

// import reducer con
import productReducer from "./product/reducer"
import uiReducer from "./ui/reducer"
import { thunk } from "redux-thunk"
import logger from "redux-logger"

const isDevelopment = import.meta.env.MODE === "development"

const middlewares = []

if (isDevelopment) {
    middlewares.push(logger)
}

const rootReducer = combineReducers({
    product: productReducer,
    ui: uiReducer,
})
const store = createStore(rootReducer, applyMiddleware(thunk, ...middlewares))

export default store
