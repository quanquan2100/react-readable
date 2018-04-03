import React, { Component } from 'react';
// import { Route, Link } from 'react-router-dom';
import './App.css';
import './style/markdown.css';
import './style/comment.css';
// import RichTextEditor from 'react-rte';
// import Modal from "react-modal"
// import { createStore } from 'redux'
import { connect } from 'react-redux';
// import { Provider, connect } from 'react-redux';
// import { Provider } from 'react-redux';
// import { connect } from 'react-redux';

// import IconComment from "react-icons/lib/md/comment"
// import IconAccount from "react-icons/lib/md/perm-identity"
// import IconLike from "react-icons/lib/md/favorite-border"
// import IconAdd from "react-icons/lib/md/add"
// import IconArrowRight from "react-icons/lib/md/keyboard-arrow-right"
// import IconTag from "react-icons/lib/md/local-offer"
// import IconTime from "react-icons/lib/md/schedule"
// import IconTitle from "react-icons/lib/md/toc"
import IconGithub from "react-icons/lib/fa/github"
// import IconDelete from "react-icons/lib/md/delete"
// import IconEdit from "react-icons/lib/md/edit"
// import IconBack from "react-icons/lib/md/arrow-back"



// import action creater
// import { openPostModal, openCommentModal } from './actions'

// import component
import EditPostModal from "./components/EditPostModal"
import DefaultView from "./components/DefaultView"
import PostDetail from "./components/PostDetail"
import EditCommentModal from "./components/EditCommentModal"


class App extends Component {
  // constructor() {
  //   super();
  // }


  render() {
    console.log(this.props)
    return (
      <div className="App">
        <header className="">
          <h1 className="">React Project 2 - Readable</h1>
        </header>
        <PostDetail />
        <EditPostModal />
        <EditCommentModal />
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
