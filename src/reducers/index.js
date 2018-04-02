import { combineReducers } from 'redux'

import {
  OPEN_MODAL,
  CLOSE_MODAL,
} from '../actions'

const globalReducerState = {
  modalIsOpen: false,
  category: "all"
}

function globalReducer(state = globalReducerState, action) {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        modalIsOpen: true
      }
    case CLOSE_MODAL:
      return {
        ...state,
        modalIsOpen: false
      }
    default:
      return state;
  }
}

function post(state = {}, action) {
  switch (action.type) {
    default:
      return state;
  }
}

function comment(state = {}, action) {
  switch (action.type) {
    default:
      return state;
  }
}

function category(state = {}, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default combineReducers({
  globalReducer,
  post,
  comment,
  category
});