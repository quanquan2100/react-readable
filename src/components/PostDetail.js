import React from 'react';
import { connect } from 'react-redux';
import  * as readableAPI from '../readableAPI'
import RichTextEditor from 'react-rte';
import { Link } from 'react-router-dom';

import IconComment from "react-icons/lib/md/comment"
import IconAccount from "react-icons/lib/md/perm-identity"
import IconLike from "react-icons/lib/md/favorite-border"
import IconTime from "react-icons/lib/md/schedule"
import IconDelete from "react-icons/lib/md/delete"
import IconEdit from "react-icons/lib/md/edit"
import IconBack from "react-icons/lib/md/arrow-back"
import IconThumbDown from "react-icons/lib/md/thumb-down"
import IconThumbUp from "react-icons/lib/md/thumb-up"




// import action creater
import { openPostModal, setCurrentPostId, setCommentList, setEditingState, delPost, updateVote } from '../actions'
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
    const { editPost, delPost, votePost, currentPostId, postList, category } = this.props;
    let post = {}
    postList.forEach((p) => (p.id === currentPostId ? post = p : ""))

    if (post.title === undefined) {
      return (
        <div className="detail">
          <Link className="back" to={category === "all" ? "/" : `/category/${category}`}><IconBack /> 返回</Link>
          <h2 className="article-title">该文章不存在</h2>
        </div>
      )
    }

    return (
        <div className="detail">
          <Link className="back" to={category === "all" ? "/" : `/category/${category}`}><IconBack /> 返回</Link>
          <h2 className="article-title">{post.title}</h2>
          <div className="article-info" style={{borderBottom: "none"}}>
            <div className=""><IconTime/> {formatDate(post.timestamp)}</div>
            <div className="article-author"><IconAccount/> 作者: {post.author}</div>
            <div className="article-comment"><IconComment/> 评论数 ( {post.commentCount} )</div>
            <div className="article-like"><IconLike/> 投票数 ( {post.voteScore} )</div>
            <div className="post-operate" onClick={() => editPost(post.id)} ><IconEdit /> 修改</div>
            <div className="post-operate" onClick={() => delPost(post.id)} ><IconDelete />删除</div>
          </div>
          <div className="detail-ctx">
          <RichTextEditor readOnly value={RichTextEditor.createValueFromString(post.body, 'html')} />
          </div>
          <Comment />
          <div className="like-btn" onClick={() => votePost(post.id, "upVote")} ><IconThumbUp size="25" /> 支持</div>
          <div className="dislike-btn" onClick={() => votePost(post.id, "downVote")} ><IconThumbDown size="25" /> 反对</div>
        </div>
    );
  }
}

function mapStateToProps ({ globalReducer, postReducer } = {}) {
  return {
    postList: postReducer.postList,
    category: globalReducer.category,
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
    editPost: () => {
      dispatch(setEditingState("edit"));
      dispatch(openPostModal());
    },
    delPost: (id) => {
      dispatch((dispatch) => {
        readableAPI
          .delPost(id)
          .then((data) => {
            dispatch(delPost(data.id))
            // 删除完自动跳转
          })
      })
    },
    votePost: (id, type) => {
      const change = {
        "upVote": 1,
        "downVote": -1
      }
      dispatch((dispatch) => {
        readableAPI
          .votePost(id, type)
          .then((data) => {
            dispatch(updateVote(id, change[type]))
          })
      })
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostDetail);

