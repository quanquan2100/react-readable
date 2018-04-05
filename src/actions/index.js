/**
 * 页面状态类型 action
 */
export const OPEN_POST_MODAL = "OPEN_POST_MODAL";
export const CLOSE_POST_MODAL = "CLOSE_POST_MODAL";
export const OPEN_COMMENT_MODAL = "OPEN_COMMENT_MODAL";
export const CLOSE_COMMENT_MODAL = "CLOSE_COMMENT_MODAL";
export const CHOOSE_CATEGORY = "CHOOSE_CATEGORY";
export const CHANGE_ORDER = "CHANGE_ORDER";
export const SET_CURRENT_POST_ID = "SET_CURRENT_POST_ID";
export const SET_CURRENT_COMMENT_ID = "SET_CURRENT_COMMENT_ID";
export const SET_EDITING_STATE = "SET_EDITING_STATE";

export const openPostModal = () => ({
  type: OPEN_POST_MODAL
});

export const closePostModal = () => ({
  type: CLOSE_POST_MODAL
});

export const openCommentModal = () => ({
  type: OPEN_COMMENT_MODAL
});

export const closeCommentModal = () => ({
  type: CLOSE_COMMENT_MODAL
});

export const chooseCategory = (category) => ({
  type: CHOOSE_CATEGORY,
  category
});

export const changeOrder = () => ({
  type: CHANGE_ORDER
})

export const setCurrentPostId = (id) => ({
  type: SET_CURRENT_POST_ID,
  id
})

export const setCurrentCommentId = (id) => ({
  type: SET_CURRENT_COMMENT_ID,
  id
})

export const setEditingState = (state) => ({
  type: SET_EDITING_STATE,
  state
})

/**
 * 类别相关 action
 */
export const GET_CATEGORIES = "GET_CATEGORIES";

export const getCategories_a = (categories) => ({
  type: GET_CATEGORIES,
  categories
});

/**
 * Post 相关 action
 */
export const GET_POST_LIST = "GET_POST_LIST";
export const PUSH_POST = "PUSH_POST";
export const UPDATE_POST = "UPDATE_POST";
export const MODIFY_COMMENT_NUM = "MODIFY_COMMENT_NUM";


export const getPostList_a = (postList) => ({
  type: GET_POST_LIST,
  postList: postList
});

export const pushPost = (post) => ({
  type: PUSH_POST,
  post
});

export const updatePost = (post) => ({
  type: UPDATE_POST,
  post
});

export const modifyCommentNum = (id, num) => ({
  type: MODIFY_COMMENT_NUM,
  id,
  num
})

/**
 * Comment 相关 action
 */
export const SET_COMMENT_LIST = "SET_COMMENT_LIST";
export const PUSH_COMMENT = "PUSH_COMMENT";
export const UPDATE_COMMENT = "UPDATE_COMMENT";

export const setCommentList = (commentList) => ({
  type: SET_COMMENT_LIST,
  commentList
});

export const pushComment = (comment) => ({
  type: PUSH_COMMENT,
  comment
});

export const updateComment = (comment) => ({
  type: UPDATE_COMMENT,
  comment
});

