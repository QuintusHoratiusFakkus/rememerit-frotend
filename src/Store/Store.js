import {combineReducers, applyMiddleware, createStore} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk'

import addToDoPopup from './../Reducers/addToDoPopup.js'
import toDoPopup from './../Reducers/toDoPopup.js'
import toDosList from './../Reducers/toDosList.js'
import listRequestDate from './../Reducers/listRequestDate.js'
import popupDate from './../Reducers/popupDate.js'
import toDoActionType from './../Reducers/toDoActionType.js'
import loginStatus from './../Reducers/loginStatus.js'

const allReducers = combineReducers({
  addToDoPopup,
  toDosList,
  toDoPopup,
  listRequestDate,
  popupDate,
  loginStatus,
  toDoActionType
})

const store = createStore(
  allReducers,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)

export default store
