import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import './style/markdown.css';
import './style/comment.css';
import RichTextEditor from 'react-rte';
import Modal from "react-modal"
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux';
// import { Provider } from 'react-redux';
// import { connect } from 'react-redux';

import IconComment from "react-icons/lib/md/comment"
import IconAccount from "react-icons/lib/md/perm-identity"
import IconLike from "react-icons/lib/md/favorite-border"
import IconAdd from "react-icons/lib/md/add"
import IconArrowRight from "react-icons/lib/md/keyboard-arrow-right"
import IconTag from "react-icons/lib/md/local-offer"
import IconTime from "react-icons/lib/md/schedule"
import IconTitle from "react-icons/lib/md/toc"
import IconGithub from "react-icons/lib/fa/github"
import IconDelete from "react-icons/lib/md/delete"
import IconEdit from "react-icons/lib/md/edit"


// import action creater
import { openModal } from './actions'

// import component
import EditPostModal from "./components/EditPostModal"
import DefaultView from "./components/DefaultView"


class App extends Component {
  constructor() {
    super();
  }


  render() {
    console.log(this.props)
    return (
      <div className="App">
        <header className="">
          <h1 className="">React Project 2 - Readable</h1>
        </header>
        
        <div className="detail">
          <h2 className="article-title"><Link to="/detail">Node 调试工具入门教程</Link></h2>
          <div className="article-info">
            <div className=""><IconTime/> 2018-03-21</div>
            <div className="article-author"><IconAccount/> 作者: 灰仔</div>
            <div className="article-comment"><IconComment/> 评论数 ( 10 )</div>
            <div className="article-like"><IconLike/> 投票数 ( 17 )</div>
          </div>
          <div className="detail-ctx">

<div className="markdown-body">
<p>This is the starter project for the final assessment project for Udacity's Redux course where you will build a content and comment web app. Users will be able to post content to predefined categories, comment on their posts and other users' posts, and vote on posts and comments. Users will also be able to edit and delete posts and comments.</p>
<p>This repository includes the code for the backend API Server that you'll use to develop and interact with the front-end portion of the project.</p>
<h2>Start Developing</h2>
<p>To get started developing right away:</p>
<ul>
<li>Install and start the API server
<ul>
<li><code>cd api-server</code></li>
<li><code>npm install</code></li>
<li><code>node server</code></li>
</ul>
</li>
<li>In another terminal window, use Create React App to scaffold out the front-end
<ul>
<li><code>create-react-app frontend</code></li>
<li><code>cd frontend</code></li>
<li><code>npm start</code></li>
</ul>
</li>
</ul>
<h2>API Server</h2>
<p>Information about the API server and how to use it can be found in its <a href="/quanquan2100/react-readable/blob/master/api-server/README.md">README file</a>.</p>
</div>

          </div>
          <div className="comment">
            <div className="comment-add" title="添加评论">
              <IconComment size="30"/>
            </div>
            <ul className="comment-list">
              <li className="comment-item">
                <div className="comment-body">
                  <div className="comment-tool">
                    <div className="comment-edit"><IconEdit />修改</div>
                    <div className="comment-del"><IconDelete />删除</div>
                  </div>
                  <div className="comment-info">
                    <h3 className="comment-author">James Coolman</h3>
                    <span className="comment-time">2 days ago</span>
                  </div>
                  <p className="comment-ctx">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus ras purus odio, vestibulum in vulputate at, tempus viverra turpis.</p>
                </div>
              </li>
              <li className="comment-item">
                <div className="comment-body">
                  <div className="comment-tool">
                    <div className="comment-edit">修改</div>
                    <div className="comment-del">删除</div>
                  </div>
                  <div className="comment-info">
                    <h3 className="comment-author">James Coolman</h3>
                    <span className="comment-time">2 days ago</span>
                  </div>
                  <p className="comment-ctx">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus ras purus odio, vestibulum in vulputate at, tempus viverra turpis.</p>
                </div>
              </li>
              <li className="comment-item">
                <div className="comment-body">
                  <div className="comment-tool">
                    <div className="comment-edit">修改</div>
                    <div className="comment-del">删除</div>
                  </div>
                  <div className="comment-info">
                    <h3 className="comment-author">James Coolman</h3>
                    <span className="comment-time">2 days ago</span>
                  </div>
                  <p className="comment-ctx">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus ras purus odio, vestibulum in vulputate at, tempus viverra turpis.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <footer>made by quanquan, <a href="https://github.com/quanquan2100/react-readable" target="_blank">view in github <IconGithub /></a></footer>
      </div>
    );
  }
}

function mapStateToProps ({ globalReducer: { category } } = {}) {
  return {
    category
  }
}

function mapDispatchToProps (dispatch) {
  return {
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
