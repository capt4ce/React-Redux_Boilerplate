import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import auths from './auths'

const AppReducer = combineReducers({
  auths,
  router: routerReducer
})

export default AppReducer
