import React from 'react';
import { connect } from 'react-redux';

import IconComment from "react-icons/lib/md/comment"
import IconDelete from "react-icons/lib/md/delete"
import IconEdit from "react-icons/lib/md/edit"

import { openCommentModal, setCurrentCommentId } from '../actions'
import { formatDate } from "../util/util"


class Comment extends React.Component {

  // constructor(props) {
  //   super(props);
  // }

  render() {
    const { editComment, delComment, addComment, commentList } = this.props;
    let commentes = commentList;
    return (
      <div className="comment">
        <ul className="comment-list">
          {
            commentes.map((comment) => (
              <li className="comment-item" key={comment.id}>
                <div className="comment-body">
                  <div className="comment-tool">
                    <div className="comment-edit" onClick={() => (editComment(comment.id))} ><IconEdit />修改</div>
                    <div className="comment-del"  onClick={() => (delComment(comment.id))}><IconDelete />删除</div>
                  </div>
                  <div className="comment-info">
                    <h3 className="comment-author">{comment.author}</h3>
                    <span className="comment-time">{formatDate(comment.timestamp)}</span>
                  </div>
                  <p className="comment-ctx">{comment.body}</p>
                </div>
              </li>
            ))
          }
        </ul>
        <div className="comment-add" title="添加评论" onClick={() => addComment()}>
          <IconComment size="30"/>
        </div>
      </div>
    );
  }
}

function mapStateToProps ({ globalReducer, commentReducer } = {}) {
  return {
    commentList: commentReducer.commentList
  }
}

function mapDispatchToProps (dispatch) {
  return {
    addComment: () => {dispatch(openCommentModal())},
    editComment: () => {},
    delComment: () => {},

  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Comment);

