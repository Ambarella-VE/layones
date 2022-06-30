import { 
  configureStore, 
  combineReducers 
} from "@reduxjs/toolkit";
import {
  CategoriesReducer,
  ProvidersReducer
} from './reducers/index'

const rootReducer = combineReducers({
  categories: CategoriesReducer,
  providers: ProvidersReducer
})

const store = configureStore({reducer: rootReducer})

export default store