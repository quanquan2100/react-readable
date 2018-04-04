import React from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
// import { getCategories } from '../readableAPI'
// import { chooseCategory } from "../actions"

// import IconTag from "react-icons/lib/md/local-offer"
import IconArrowRight from "react-icons/lib/md/keyboard-arrow-right"

class Breadcrumbs extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    const { currentCategory } = this.props;
    // console.log(context);
    return (
      <div className="breadcrumbs">
        <ul className="breadcrumbs-list">
          {
            currentCategory === "all" ?
              (<li className="breadcrumbs-item active">全部分类</li>) :
              (<React.Fragment>
                <li className="breadcrumbs-item">全部分类 <IconArrowRight/></li>
                <li className="breadcrumbs-item active">{currentCategory}</li>
              </React.Fragment>)
          }
        </ul>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    currentCategory: state.globalReducer.category
  }
}

function mapDispatchToProps (dispatch) {
  return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Breadcrumbs);
