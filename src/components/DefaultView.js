import React from 'react';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';

// import icon
import IconComment from "react-icons/lib/md/comment"
import IconAccount from "react-icons/lib/md/perm-identity"
import IconLike from "react-icons/lib/md/favorite-border"
import IconAdd from "react-icons/lib/md/add"
import IconArrowRight from "react-icons/lib/md/keyboard-arrow-right"
import IconTag from "react-icons/lib/md/local-offer"
import IconTime from "react-icons/lib/md/schedule"
import IconGithub from "react-icons/lib/fa/github"

// import action creater
import { openModal } from '../actions'

class DefaultView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { newPost } = this.props;
    return (
      <div className="column-2">
        <div className="column-left">
          <div className="categories">
            <Link to="/">全部分类 ( 39 )</Link>
            <ul className="categories-list">
              <li className="categories-item">
                <Link to="/category?sort=name"><IconTag /> 分类一 ( 10 )</Link>
              </li>
              <li className="categories-item active">
                <Link to="/category?sort=name"><IconTag /> 分类二 ( 16 )</Link>
              </li>
              <li className="categories-item">
                <Link to="/category?sort=name"><IconTag /> 分类三 ( 34 )</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="column-right">

          <div className="breadcrumbs">
            <div className="btn-group">
              <div className="btn"><IconTime /> 日期优先</div>
              <div className="btn active"><IconLike/> 投票优先</div>
            </div>
            <ul className="breadcrumbs-list">
              <li className="breadcrumbs-item">全部分类 <IconArrowRight/></li>
              <li className="breadcrumbs-item active">分类二</li>
            </ul>
          </div>
          
          <div className="">
            <ul className="article-list">
              <li className="article-item">
                <div className="article-time">2018-03-21</div>
                <h2 className="article-title"><Link to="/detail">Node 调试工具入门教程</Link></h2>
                <div className="article-info">
                  <div className="article-author"><IconAccount/> 作者: 灰仔</div>
                  <div className="article-comment"><IconComment/> 评论数 ( 10 )</div>
                  <div className="article-like"><IconLike/> 投票数 ( 17 )</div>
                </div>
              </li>
              <li className="article-item">
                <div className="article-time">2018-03-21</div>
                <h2 className="article-title"><Link to="/detail">Node 调试工具入门教程</Link></h2>
                <div className="article-info">
                  <div className="article-author"><IconAccount/> 作者: 灰仔</div>
                  <div className="article-comment"><IconComment/> 评论数 ( 10 )</div>
                  <div className="article-like"><IconLike/> 投票数 ( 17 )</div>
                </div>
              </li>
              <li className="article-item">
                <div className="article-time">2018-03-21</div>
                <h2 className="article-title"><Link to="/detail">Node 调试工具入门教程</Link></h2>
                <div className="article-info">
                  <div className="article-author"><IconAccount/> 作者: 灰仔</div>
                  <div className="article-comment"><IconComment/> 评论数 ( 10 )</div>
                  <div className="article-like"><IconLike/> 投票数 ( 17 )</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="create" onClick={() => newPost()} title="新建帖子"><IconAdd size="70"/></div>
      </div>
    );
  }
}

function mapStateToProps ({ modalIsOpen }) {
  return {}
}

function mapDispatchToProps (dispatch) {
  return {
    newPost: () => dispatch(openModal())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DefaultView);
