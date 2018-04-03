export const OPEN_POST_MODAL = 'OPEN_POST_MODAL';
export const CLOSE_POST_MODAL = 'CLOSE_POST_MODAL';
export const OPEN_COMMENT_MODAL = 'OPEN_COMMENT_MODAL';
export const CLOSE_COMMENT_MODAL = 'CLOSE_COMMENT_MODAL';

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