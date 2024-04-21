import { configureStore } from '@reduxjs/toolkit'
import useReducer from './modules/user'


export default configureStore({
  reducer: {
    user: useReducer
  }
})