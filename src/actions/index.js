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
export const GET_POST = "GET_POST";

export const getPostList_a = (postList) => ({
  type: GET_POST_LIST,
  postList: postList
});
export const getPost = (post) => ({
  type: GET_POST,
  post
});


/**
 * Comment 相关 action
 */
export const SET_COMMENT_LIST = "SET_COMMENT_LIST";
export const GET_COMMENT = "GET_COMMENT_LIST";

export const setCommentList = (commentList) => ({
  type: SET_COMMENT_LIST,
  commentList
});

export const getComment = (comment) => ({
  type: GET_COMMENT,
  comment
});

