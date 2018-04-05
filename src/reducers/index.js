import { combineReducers } from 'redux'

import {
  OPEN_POST_MODAL,
  CLOSE_POST_MODAL,
  OPEN_COMMENT_MODAL,
  CLOSE_COMMENT_MODAL,
  GET_CATEGORIES,
  GET_POST_LIST,
  PUSH_COMMENT,
  CHOOSE_CATEGORY,
  CHANGE_ORDER,
  SET_CURRENT_POST_ID,
  SET_CURRENT_COMMENT_ID,
  SET_COMMENT_LIST,
  SET_EDITING_STATE,
  PUSH_POST,
  UPDATE_COMMENT,
  UPDATE_POST,
  MODIFY_COMMENT_NUM,
  DEL_POST,
  DEL_COMMENT,
  UPDATE_VOTE,
} from '../actions'

const globalReducerState = {
  postModalOpen: false,
  commentModalOpen: false,
  category: "all",
  currentPostId: "",
  currentCommentId: "",
  order: "vote",
  modalState: "new"
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
    case SET_CURRENT_POST_ID:
      return {
        ...state,
        currentPostId: action.id
      }
    case SET_CURRENT_COMMENT_ID:
      return {
        ...state,
        currentCommentId: action.id
      }
    case SET_EDITING_STATE:
      return {
        ...state,
        modalState: action.state
      }
    default:
      return state;
  }
}

const postState = {
  postList: []
}

function postReducer(state = postState, action) {
  let copy;
  switch (action.type) {
    case GET_POST_LIST:
      return {
        ...state,
        postList: action.postList
      }
    case PUSH_POST:
      const postResult = state.postList.concat();
      postResult.push(action.post);
      return {
        ...state,
        postList: postResult
      }
    case UPDATE_POST:
      const updateResult = state.postList.concat();
      updateResult.forEach((post, index) => (post.id === action.post.id ? (updateResult[index] = action.post) : ""))
      return {
        ...state,
        postList: updateResult
      }
    case MODIFY_COMMENT_NUM:
      copy = state.postList.concat();
      copy.forEach((post, index) => (post.id === action.id ? (copy[index].commentCount += action.num) : ""))
      return {
        ...state,
        postList: copy
      }
    case DEL_POST:
      copy = state.postList.concat();
      state.postList.forEach((post, index) => post.id === action.id ? (copy.splice(index, 1)) : "")

      return {
        ...state,
        postList: copy
      }
    case UPDATE_VOTE:
      copy = state.postList.map((post) => (post.id === action.id ? (post.voteScore += action.vote, post) : post));
      return {
        ...state,
        postList: copy
      }
    default:
      return state;
  }
}

const commentState = {
  commentList: []
}

function commentReducer(state = commentState, action) {
  let copy;
  switch (action.type) {
    case SET_COMMENT_LIST:
      return {
        ...state,
        commentList: action.commentList
      }
    case PUSH_COMMENT:
      const postResult = state.commentList.concat();
      postResult.push(action.comment);
      return {
        ...state,
        commentList: postResult
      }
    case UPDATE_COMMENT:
      const updateResult = state.commentList.concat();
      updateResult.forEach((comment, index) => (comment.id === action.comment.id ? (updateResult[index] = action.comment) : ""))
      return {
        ...state,
        commentList: updateResult
      }
    case DEL_COMMENT:
      copy = state.commentList.concat();
      state.commentList.forEach((comment, index) => comment.id === action.id ? (copy.splice(index, 1)) : "")

      return {
        ...state,
        commentList: copy
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