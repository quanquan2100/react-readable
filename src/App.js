import React, { Component } from 'react';
// import { Route, Link } from 'react-router-dom';
import { Route } from 'react-router-dom';
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
import { withRouter } from 'react-router-dom'

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
import { getCategories_a, getPostList_a } from './actions'
import  * as readableAPI from './readableAPI'



// import component
import EditPostModal from "./components/EditPostModal"
import DefaultView from "./components/DefaultView"
import PostDetail from "./components/PostDetail"
import EditCommentModal from "./components/EditCommentModal"

class App extends Component {
  // constructor() {
  //   super();
  // }

  componentDidMount() {
    this.props.getPostes();
    this.props.getCtgry();
  }


  render() {
    return (
      <div className="App">
        <header className="">
          <h1 className="">React Project 2 - Readable</h1>
        </header>

        <Route path="/post/:id" render={({ match }) => {
          return (<PostDetail postId={match.params.id} />);
        }} />

        <Route path="/category/:id" render={({ match }) => {
          return (<DefaultView categoryId={match.params.id} />);
        }} />

        <Route path="/" exact render={({ match }) => {
          return (<DefaultView categoryId="all" />);
        }} />
        
        <EditPostModal />
        <EditCommentModal />

        <footer>made by quanquan, <a href="https://github.com/quanquan2100/react-readable" target="_blank" rel="noopener noreferrer">view in github <IconGithub /></a></footer>
      </div>
    );
  }
}

function mapStateToProps ({ globalReducer: { category } } = {}) {
  return {}
}

function mapDispatchToProps (dispatch) {
  return {
    getCtgry: () => (dispatch((dispatch, getState) => (
      readableAPI
        .getCategories()
        .then(data => dispatch(getCategories_a(data.categories)))
    ))),
    getPostes: () => (dispatch((dispatch, getState) => (
      readableAPI
        .getAllPosts()
        .then(data => dispatch(getPostList_a(data)))
    )))
  }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(App));
