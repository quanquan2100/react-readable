import { combineReducers } from 'redux'

import {
  OPEN_POST_MODAL,
  CLOSE_POST_MODAL,
  OPEN_COMMENT_MODAL,
  CLOSE_COMMENT_MODAL,
  GET_CATEGORIES,
  GET_POST_LIST,
  GET_POST,
  GET_COMMENT_LIST,
  GET_COMMENT,
  CHOOSE_CATEGORY,
  CHANGE_ORDER
} from '../actions'

const globalReducerState = {
  postModalOpen: false,
  commentModalOpen: false,
  category: "all",
  currentPostId: 123,
  currentCommentId: 123,
  order: "vote"
}

function globalReducer(state = globalReducerState, action) {
  switch (action.type) {
    case OPEN_POST_MODAL:
      return {
        ...state,
        postModalOpen: true
      }
    case CLOSE_POST_MODAL:
      return {
        ...state,
        postModalOpen: false
      }
    case OPEN_COMMENT_MODAL:
      return {
        ...state,
        commentModalOpen: true
      }
    case CLOSE_COMMENT_MODAL:
      return {
        ...state,
        commentModalOpen: false
      }
    case CHOOSE_CATEGORY:
      return {
        ...state,
        category: action.category
      }
    case CHANGE_ORDER:
      let newOrder;
      if (state.order === "time") {
        newOrder = "vote";
      } else {
        newOrder = "time"
      }
      return {
        ...state,
        order: newOrder
      }
    default:
      return state;
  }
}

const postState = {
  postList: []
}

function postReducer(state = postState, action) {
  switch (action.type) {
    case GET_POST_LIST:
      return {
        ...state,
        postList: action.postList
      }
    case GET_POST:
      return {
        ...state
      }
    default:
      return state;
  }
}

const commentState = {}

function commentReducer(state = commentState, action) {
  switch (action.type) {
    case GET_COMMENT_LIST:
      return {
        ...state
      }
    case GET_COMMENT:
      return {
        ...state
      }
    default:
      return state;
  }
}

/**
 * 分类相关 reducer
 */

const categoryState = {
  categories: []
}

function categoryReducer(state = categoryState, action) {
  switch (action.type) {
    case GET_CATEGORIES:
      return {
        ...state,
        categories: action.categories
      };
    default:
      return state;
  }
}

export default combineReducers({
  globalReducer,
  postReducer,
  commentReducer,
  categoryReducer
});