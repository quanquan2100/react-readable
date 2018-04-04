import React from 'react';
import { connect } from 'react-redux';
import  * as readableAPI from '../readableAPI'

import IconComment from "react-icons/lib/md/comment"
import IconAccount from "react-icons/lib/md/perm-identity"
import IconLike from "react-icons/lib/md/favorite-border"
// import IconAdd from "react-icons/lib/md/add"
// import IconArrowRight from "react-icons/lib/md/keyboard-arrow-right"
// import IconTag from "react-icons/lib/md/local-offer"
import IconTime from "react-icons/lib/md/schedule"
// import IconTitle from "react-icons/lib/md/toc"
// import IconGithub from "react-icons/lib/fa/github"
import IconDelete from "react-icons/lib/md/delete"
import IconEdit from "react-icons/lib/md/edit"
import IconBack from "react-icons/lib/md/arrow-back"

// import action creater
import { openPostModal, openCommentModal, setCurrentPostId, setCommentList } from '../actions'
import Comment from "./Comment"

import { formatDate } from "../util/util"

class PostDetail extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {
    this.props.changeCurrentPost(this.props.postId);
  }

  render() {
    const { editPost, delPost, votePost, currentPostId, postList } = this.props;
    let post = {}
    postList.forEach((p) => (p.id === currentPostId ? post = p : ""))
    return (
        <div className="detail">
          <div className="back"><IconBack /> 返回</div>
          <h2 className="article-title">{post.title}</h2>
          <div className="article-info">
            <div className=""><IconTime/> {formatDate(post.timestamp)}</div>
            <div className="article-author"><IconAccount/> 作者: {post.author}</div>
            <div className="article-comment"><IconComment/> 评论数 ( {post.commentCount} )</div>
            <div className="article-like"><IconLike/> 投票数 ( {post.voteScore} )</div>
            <div className="post-operate" onClick={() => editPost(post.id)} ><IconEdit /> 修改</div>
            <div className="post-operate" onClick={() => delPost(post.id)} ><IconDelete />删除</div>
          </div>
          <div className="detail-ctx"><div className="markdown-body">{post.body}</div></div>
          <Comment />
          <div className="like-btn" onClick={() => votePost(post.id)} ><IconLike size="30" /> 点击投票</div>
        </div>
    );
  }
}

function mapStateToProps ({ globalReducer, postReducer } = {}) {
  return {
    postList: postReducer.postList,
    currentPostId: globalReducer.currentPostId
  }
}

function mapDispatchToProps (dispatch) {
  return {
    changeCurrentPost: (id) => {
      dispatch(setCurrentPostId(id));
      dispatch((dispatch, getState) => {
        readableAPI
          .getPostComment(id)
          .then((data) => {
            return dispatch(setCommentList(data))
          })
      })
    },
    editPost: () => {},
    delPost: () => {},
    votePost: () => {}
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostDetail);

