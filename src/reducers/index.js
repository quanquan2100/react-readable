import { combineReducers } from 'redux'

import {
  OPEN_POST_MODAL,
  CLOSE_POST_MODAL,
  OPEN_COMMENT_MODAL,
  CLOSE_COMMENT_MODAL
} from '../actions'

const globalReducerState = {
  postModalOpen: false,
  commentModalOpen: false,
  category: "all",
  post: 123
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
    default:
      return state;
  }
}

const postState = {
  postList: [{
    id: 123,
    title: "标题",
    author: "灰仔",
    time: "2018-03-21",
    comment: [1, 2, 3],
    like: 15,
    ctx: `<p>This is the starter project for the final assessment project for Udacity's Redux course where you will build a content and comment web app. Users will be able to post content to predefined categories, comment on their posts and other users' posts, and vote on posts and comments. Users will also be able to edit and delete posts and comments.</p> <p>This repository includes the code for the backend API Server that you'll use to develop and interact with the front-end portion of the project.</p> <h2>Start Developing</h2> <p>To get started developing right away:</p> <ul> <li>Install and start the API server <ul> <li><code>cd api-server</code></li> <li><code>npm install</code></li> <li><code>node server</code></li> </ul> </li> <li>In another terminal window, use Create React App to scaffold out the front-end <ul> <li><code>create-react-app frontend</code></li> <li><code>cd frontend</code></li> <li><code>npm start</code></li> </ul> </li> </ul> <h2>API Server</h2> <p>Information about the API server and how to use it can be found in its <a href="/quanquan2100/react-readable/blob/master/api-server/README.md">README file</a>.</p>`
  }]
}

function post(state = postState, action) {
  switch (action.type) {
    default: return state;
  }
}

const commentState = {}

function comment(state = commentState, action) {
  switch (action.type) {
    default: return state;
  }
}

const categoryState = {}

function category(state = categoryState, action) {
  switch (action.type) {
    default: return state;
  }
}

export default combineReducers({
  globalReducer,
  post,
  comment,
  category
});