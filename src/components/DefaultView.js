import React from 'react';
// import { Link } from 'react-router-dom';
// import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';

// import icon
// import IconComment from "react-icons/lib/md/comment"
// import IconAccount from "react-icons/lib/md/perm-identity"
import IconLike from "react-icons/lib/md/favorite-border"
import IconAdd from "react-icons/lib/md/add"
// import IconArrowRight from "react-icons/lib/md/keyboard-arrow-right"
// import IconTag from "react-icons/lib/md/local-offer"
import IconTime from "react-icons/lib/md/schedule"
// import IconGithub from "react-icons/lib/fa/github"

// import action creater
import { openPostModal, chooseCategory, changeOrder, setEditingState } from '../actions'


import Categories from "./Categories"
import Breadcrumbs from "./Breadcrumbs"
import PostList from "./PostList"

class DefaultView extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {
    this.props.categoryChange(this.props.categoryId);
  }

  render() {
    const { openPostModal, order, chOrder } = this.props;
    return (
      <div className="column-2">
        <div className="column-left">
          <Categories />
        </div>
        <div className="column-right">

          <div className="btn-group">
            <div className={"btn " + (order === "time" ? "active" : "")} onClick={() => (chOrder())} ><IconTime /> 日期优先</div>
            <div className={"btn " + (order === "vote" ? "active" : "")} onClick={() => (chOrder())} ><IconLike/> 投票优先</div>
          </div>

          <Breadcrumbs />
          
          <div className="">
            <PostList />
          </div>
        </div>
        <div className="create" onClick={() => openPostModal()} title="新建帖子"><IconAdd size="70"/></div>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    order: state.globalReducer.order
  }
}

function mapDispatchToProps (dispatch) {
  return {
    categoryChange: (category) => dispatch(chooseCategory(category)),
    openPostModal: () => {
      dispatch(setEditingState("new"));
      dispatch(openPostModal());
    },
    chOrder: () => dispatch(changeOrder())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DefaultView);
