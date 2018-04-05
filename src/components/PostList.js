
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import { getCategories } from '../readableAPI'
// import { chooseCategory } from "../actions"
// import { getPostList_a } from "../reducers"


// import IconTag from "react-icons/lib/md/local-offer"
import IconComment from "react-icons/lib/md/comment"
import IconAccount from "react-icons/lib/md/perm-identity"
import IconLike from "react-icons/lib/md/favorite-border"
import { formatDate } from "../util/util"

class PostList extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    const { currentCategory, postList, order } = this.props;
    // console.log(context);
    let showPost = postList;
    if (currentCategory !== "all") {
      showPost = postList.filter((post) => (post.category === currentCategory));
    }
    // sort
    if (order === "time") {
      // sort by time
      showPost.sort((a, b) => {
        return new Date(b.timestamp) - new Date(a.timestamp);
      });
    } else {
      // sort by vote
      showPost.sort((a, b) => (a.voteScore < b.voteScore));
    }
    return (
      <ul className="article-list">
        {
          showPost.map((post) => {
              return (
                <li className="article-item" key={post.id}>
                  <div className="article-time">{formatDate(post.timestamp)}</div>
                  <h2 className="article-title"><Link to={`/post/${post.id}`}>{post.title}</Link></h2>
                  <div className="article-info">
                    <div className="article-author"><IconAccount/> 作者: {post.author}</div>
                    <div className="article-comment"><IconComment/> 评论数 ( {post.commentCount} )</div>
                    <div className="article-like"><IconLike/> 投票数 ( {post.voteScore} )</div>
                  </div>
                </li>
              )
          })
        }
      </ul>
    );
  }
}

function mapStateToProps (state) {
  return {
    currentCategory: state.globalReducer.category,
    postList: state.postReducer.postList,
    order: state.globalReducer.order
  }
}

function mapDispatchToProps (dispatch) {
  return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostList);
