import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import './style/markdown.css';
import './style/comment.css';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

import IconGithub from "react-icons/lib/fa/github"

// import action creater
import { getCategories_a, getPostList_a } from './actions'
import  * as readableAPI from './readableAPI'

// import component
import EditPostModal from "./components/EditPostModal"
import DefaultView from "./components/DefaultView"
import PostDetail from "./components/PostDetail"
import EditCommentModal from "./components/EditCommentModal"
// import ComfirmModal from "./components/ComfirmModal"

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
